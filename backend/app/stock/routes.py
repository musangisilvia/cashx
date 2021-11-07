#!/usr/bin/env python3
from app.stock import bp
from app import db, guard
from flask_praetorian import auth_required, current_user
import os
import json
import finnhub
import requests
from flask import request
from app.models import User, Shares, Transaction
from datetime import datetime


#finnhub_client = finnhub.Client(api_key=os.environ.get('FINNHUB_SANDBOX_KEY'))
finnhub_client = finnhub.Client(api_key=os.environ.get('FINNHUB_API_KEY'))

# Set up IEX
iex_sandbox_base = "https://sandbox.iexapis.com/stable"
iex_live_base = "https://cloud.iexapis.com/stable"


@bp.route('/news')
@auth_required
def news():
    data = finnhub_client.general_news('general', min_id=0)
    data = data[:3]
    data = json.dumps(data)

    return data, 200


@bp.route('/carousel', methods=["GET"])
@auth_required
def carousel():
    IEX_SANDBOX_KEY = os.environ.get("IEX_SANDBOX_KEY")
    IEX_API_KEY = os.environ.get("IEX_API_KEY")
    #url = f"{iex_sandbox_base}/stock/market/list/mostactive?token={IEX_SANDBOX_KEY}"
    url = f"{iex_live_base}/stock/market/list/mostactive?token={IEX_API_KEY}"
    print(url)
    r = requests.get(url)
    data = r.json()
    if not data:
        data = None
    return json.dumps(data), 200


@bp.route('/stocks', methods=["GET"])
@auth_required
def stocks():
    IEX_SANDBOX_KEY = os.environ.get("IEX_SANDBOX_KEY")
    active_url = f"{iex_sandbox_base}/stock/market/list/mostactive?token={IEX_SANDBOX_KEY}"
    gainers_url = f"{iex_sandbox_base}/stock/market/list/gainers?token={IEX_SANDBOX_KEY}"
    losers_url = f"{iex_sandbox_base}/stock/market/list/losers?token={IEX_SANDBOX_KEY}"

    r_active = requests.get(active_url)
    r_gainers = requests.get(gainers_url)
    r_losers = requests.get(losers_url)

    data = {"active": r_active.json(), "gainers": r_gainers.json(), "losers": r_losers.json()}

    return json.dumps(data), 200


@bp.route('/search_stock/<stock_name>', methods=["GET"])
@auth_required
def search(stock_name):
    results = finnhub_client.symbol_lookup(stock_name).get('result')[0]
    return json.dumps(results), 200


@bp.route('/stocks/<stock_name>', methods=["GET"])
@auth_required
def stock(stock_name):
    stock_name = stock_name.upper()

    stock_quotes = finnhub_client.quote(stock_name)

    api_key = os.environ.get("POLYGON_API_KEY")
    url = f"https://api.polygon.io/v1/meta/symbols/{stock_name}/company?apiKey={api_key}"

    r = requests.get(url)

    data = {}
    user_data = {}

    user = current_user()
    user_data["balance"] = user.balance

    shares = Shares.lookup(stock_name, user.id)
    if shares:
        user_data["shares_owned"] = shares.shares
        user_data["total_invested"] = shares.buying_value
    else:
        user_data["shares_owned"] = 0
        user_data["total_invested"] = 0


    stock = r.json()

    data["stock"] = stock
    data["user_data"] = user_data
    data["quotes"] = stock_quotes

    return json.dumps(data), 200


@bp.route('/stocks/<symbol>/buy', methods=["POST"])
@auth_required
def buy_stock(symbol):
    '''
    Buys stock for a certain company
    '''
    symbol = symbol.upper()

    # Get the data from the json payload
    req = request.get_json(force=True)
    stock_price = float(req.get('current_price', None))
    shares_to_buy = float(req.get('shares_to_buy', None))
    stock_name = req.get('company_name', None)

    # Check if the shares are positive
    if shares_to_buy < 1:
        # Return appropriate error message
        return {"error": "Invalid Number of shares to buy"}, 400


    # Calculate total amount to be spent
    total_amount = shares_to_buy * stock_price

    # Check if user can afford to buy
    user = current_user()
    if total_amount > user.balance:
        # Return appropriate error message
        return {"error": "Not Enough Balance in account"}, 400

    # If there is enough money in the account
    # First get the new balance
    new_balance = user.balance - total_amount
    user.balance = new_balance
    db.session.add(user)

    # Add the shares to the database
    # Check if they already own those shares
    shares = Shares.lookup(symbol, user.id)
    if not shares:
        # If no shares are owned create new instance
        shares = Shares(symbol=symbol,
                        name=stock_name,
                        shares=shares_to_buy,
                        buying_value=total_amount,
                        user_id=user.id)
    else:
        # If shares are already ownded just update
        shares.shares = shares.shares + shares_to_buy
        shares.buying_value=shares.buying_value + total_amount

    db.session.add(shares)

    # Add the transaction to the db
    trans = Transaction(symbol=symbol,
                        name=stock_name,
                        amount=total_amount,
                        date=datetime.now(),
                        type="buy",
                        user_id=user.id)

    db.session.add(trans)

    db.session.commit()


    return {"status": "ok"}, 201


@bp.route('/stocks/<symbol>/sell', methods=["POST"])
@auth_required
def sell_stock(symbol):
    '''
    Buys stock for a certain company
    '''
    symbol = symbol.upper()

    # Get the data from the json payload
    req = request.get_json(force=True)
    stock_price = float(req.get('current_price', None))
    shares_to_sell = float(req.get('shares_to_sell', None))
    stock_name = req.get('company_name', None)

    # Check if the shares are positive
    if shares_to_sell < 1:
        # Return appropriate error message
        return {"error": "Invalid Number of shares to sell"}, 400

    # Check if user owns those shares
    user = current_user()
    shares = Shares.lookup(symbol, user.id)
    if not shares:
        return {"error": f"You don't own {symbol} shares"}, 400
    else:
        # If user owns shares check if they have the number they want to sell
        if shares_to_sell > shares.shares:
            return {"error": "You don't have that many shares to sell"}, 400


    # At this point the user owns the said shares and can sell them

    # Calculate total amount to be made
    total_amount = shares_to_sell * stock_price


    # First get the new balance
    new_balance = user.balance + total_amount
    user.balance = new_balance
    db.session.add(user)

    # Get new number of owned shares
    new_shares = shares.shares - shares_to_sell

    # If the new number is 0 completely delete the record
    if new_shares == 0:
        db.session.delete(shares)
    else:
        shares.shares = new_shares
        db.session.add(shares)

    # Add the transaction to the db
    trans = Transaction(symbol=symbol,
                        name=stock_name,
                        amount=total_amount,
                        date=datetime.now(),
                        type="sell",
                        user_id=user.id)

    db.session.add(trans)

    # Commit all these changes to the db
    db.session.commit()


    return {"status": "ok"}, 201


@bp.route('/portfolio', defaults={'top': None})
@bp.route('/portfolio/<top>')
@auth_required
def portfolio(top=7):
    '''
    Returns a list of all the stock owned by the requesting user
    '''
    data = []
    stock = {}
    user = current_user()
    if top:
        shares = Shares.query.filter_by(user_id=user.id).limit(top).all()
    else:
        shares = Shares.query.filter_by(user_id=user.id).all()

    for share in shares:
        # Find the current price for each share
        stock_quote = finnhub_client.quote(share.symbol)

        # print(share.symbol)
        stock["symbol"] = share.symbol
        stock["company_name"] = share.name
        stock["shares"] = share.shares
        stock["current_price"] = stock_quote.get("c")
        stock["change"] = stock_quote.get('d')
        stock["percent_change"] = stock_quote.get('dp')

 
        data.append(stock)
        # Empty the dict after adding it to the list
        stock={}


    return json.dumps(data), 200


@bp.route('/history')
@auth_required
def history():
    '''
    Returns a history of the transactions
    '''
    data = []
    trans = {}
    user = current_user()
    transactions = Transaction.query.filter_by(user_id = user.id).all()
    for transaction in transactions:
        trans["symbol"] = transaction.symbol
        trans["company_name"] = transaction.name
        trans["amount"] = transaction.amount
        trans["type"] = transaction.type
        trans["date"] = transaction.date.isoformat()

        data.append(trans)
        trans = {}

    return json.dumps(data), 200