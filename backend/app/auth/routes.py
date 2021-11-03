'''Contains all the routes that will be used in authentication'''
from app.auth import bp
from flask import request
from app.models import User
from app import db, guard


@bp.route('/status', methods=['GET'])
def status():
    '''
    Returns the status of the api
    '''
    return {'status': 'ok'}, 200


@bp.route('/signup', methods=['POST'])
def signup():
    '''
    Allows a new user to sign up and create an account.
    Returns the user data and a jwt token
    '''
    req = request.get_json(force=True)
    username = req.get('username', None)
    password =req.get('password', None)
    if not User.lookup(username):
        hashed_password = guard.hash_password(password)
        # hashed_password = password

        user = User(
            username=username,
            hashed_password=hashed_password,
            roles='user'
        )
        db.session.add(user)
        db.session.commit()
        ret = {'access_token': guard.encode_jwt_token(user)}
        # ret = {'access_token': "some token"}

        return ret, 200
    else:
        return {"error": "something went wrong"}


@bp.route('/login', methods=['POST'])
def login():
    '''
    The endpoint used to login to our api. It returns the jwt token that has to
    be sent with every subsequent request
    '''
    req = request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)
    user = guard.authenticate(username, password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret, 200


@bp.route('/refresh', methods=['POST'])
def refresh():
    '''
    The route to be used to refresh the token
    '''
    print("refresh request")
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'access_token': new_token}
    return ret, 200