#!/usr/bin/env python3
from app.stock import bp
from app import db, guard
from flask_praetorian import auth_required, current_user
import os
import json
import finnhub
import requests


finnhub_client = finnhub.Client(api_key=os.environ.get('FINNHUB_SANDBOX_KEY'))
# finnhub_client = finnhub.Client(api_key=os.environ.get('FINNHUB_API_KEY'))

# Set up IEX
iex_sandbox_base = "https://sandbox.iexapis.com/stable"
iex_live_base = "https://cloud.iexapis.com/stable"


@bp.route('/news')
# @auth_required
def news():
    data = finnhub_client.general_news('general', min_id=0)
    data = data[:3]
    data = json.dumps(data)

    return data, 200


@bp.route('/carousel', methods=["GET"])
# @auth_required
def carousel():
    IEX_SANDBOX_KEY = os.environ.get("IEX_SANDBOX_KEY")
    IEX_API_KEY = os.environ.get("IEX_API_KEY")
    url = f"{iex_sandbox_base}/stock/market/list/mostactive?token={IEX_SANDBOX_KEY}"
    # url = f"{iex_live_base}/stock/market/list/mostactive?token={IEX_API_KEY}"
    print(url)
    r = requests.get(url)
    data = r.json()
    if not data:
        data = None
    return json.dumps(data), 200


@bp.route('/stocks', methods=["GET"])
# @auth_required
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
# @auth_required
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
    user_data["shares_owned"] = 12341

    stock = r.json()

    data["stock"] = stock
    data["user_data"] = user_data
    data["quotes"] = stock_quotes

    return json.dumps(data), 200
