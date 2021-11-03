"""Initializes the flask app"""
from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_praetorian import Praetorian
# from app import models


db = SQLAlchemy()
migrate = Migrate()
cors = CORS()
guard = Praetorian()

def create_app(config_class = Config):
    # Imports
    # from app import models
    from app.models import User

    # Init the app
    app = Flask(__name__)


    app.config.from_object(config_class)

    # Initialise the DB
    db.init_app(app)
    migrate.init_app(app, db)
    guard.init_app(app, User)
    cors.init_app(app)

    with app.app_context():

        #Register Auth Blueprint
        from app.auth import bp as auth_bp
        app.register_blueprint(auth_bp, url_prefix='/api')

        # Register Stock Blueprint
        from app.stock import bp as stock_bp
        app.register_blueprint(stock_bp, url_prefix='/api')

        return app

# from app import models


    

