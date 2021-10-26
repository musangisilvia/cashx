import os
from flask import Flask, request
import flask_sqlalchemy
import flask_praetorian
from flask_cors import CORS
# Import finnhub
import finnhub
import json
import requests

FINNHUB_API_KEY = 'c5reog2ad3ifnpn51m20'

#finnhub_client = finnhub.Client(api_key=os.environ.get('FINNHUB_SANDBOX_KEY'))
# finnhub_client = finnhub.Client(api_key=os.environ.get('FINNHUB_API_KEY'))
finnhub_client = finnhub.Client(api_key=FINNHUB_API_KEY)

# Set up IEX
iex_sandbox_base = "https://sandbox.iexapis.com/stable"

db = flask_sqlalchemy.SQLAlchemy()
guard = flask_praetorian.Praetorian()
cors = CORS()


# A generic user model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True, server_default='true')
    balance = db.Column(db.Float, default=10000.0)

    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []

    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id

    def is_valid(self):
        return self.is_active


# Initialize flask app for the example
app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'top secret key'
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}

guard.init_app(app, User)

app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.getcwd(), 'database.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

cors.init_app(app)

with app.app_context():
    db.create_all()
    if db.session.query(User).filter_by(username="Tuva").count() < 1:
        db.session.add(User(
            username="Tuva",
            password=guard.hash_password('strong'),
            roles='admin'))
    if db.session.query(User).filter_by(username="Demo").count() < 1:
        db.session.add(User(
            username="Demo",
            password=guard.hash_password('demo'),
            roles='demo'
        ))
    db.session.commit()


@app.route('/api/')
def home():
    return {"Hello": "World"}, 200

@app.route('/api/signup', methods=['POST'])
def signup():
    req = request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)
    if not User.lookup(username):
        password = guard.hash_password('strong')
        user = User(username=username, password=password, roles='user')
        db.session.add(user)
        db.session.commit()
        ret = {'access_token': guard.encode_jwt_token(user)}
        return ret, 200
    else:
        return {"status": "not okay"}



@app.route('/api/login', methods=['POST'])
def login():
    req = request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)
    user = guard.authenticate(username, password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret, 200


@app.route('/api/refresh', methods=['POST'])
def refresh():
    print("refresh request")
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'access_token': new_token}
    return ret, 200


@app.route('/api/protected')
@flask_praetorian.auth_required
def protected():
    return {'message': f'protected endpoint allowd user - {flask_praetorian.current_user().username}'}


@app.route('/api/news')
def news():
    data = finnhub_client.general_news('general', min_id=0)
    data = data[:3]
    data = json.dumps(data)

    return data, 200


@app.route('/api/carousel')
def carousel():
    IEX_SANDBOX_KEY = 'teaTSgcDfaMUGu6aieUpcQ_hkXcFcrpU'
    url = f"{iex_sandbox_base}/stock/market/list/mostactive?token={IEX_SANDBOX_KEY}"

    r = requests.get(url)
    return json.dumps(r.json()), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
