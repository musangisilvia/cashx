"""Contains all the models that will be used in the flask api"""
from app import db

class User(db.Model):
    '''
    The class to represent the users of the api
    '''
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, unique=True)
    hashed_password = db.Column(db.Text)
    email = db.Column(db.Text)
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True, server_default='true')
    balance = db.Column(db.Float, default=100000.0)
    shares = db.relationship('Shares', backref='user', lazy=True)
    transactions = db.relationship('Transaction', backref='user', lazy=True)

    
    @property
    def identity(self):
        '''
        A required attribute by flask-praetorinan that the user has an identity
        instance
        '''
        return self.id

    
    @property
    def rolenames(self):
        '''
        A required attribute by flask-praetorian that describes the roles
        attached to the user instance
        '''
        try:
            return self.roles.split(",")
        except Exception:
            return []


    @property
    def password(self):
        '''
        Requried attribute by flask-praetorian that provides the hashed
        password assigned to the user instance
        '''
        return self.hashed_password

    @classmethod
    def lookup(cls, username):
        '''
        Required class method that takes a single username and returns a user
        instance if there is one that matches or None if there is not.
        '''
        return cls.query.filter_by(username=username).one_or_none()

    @classmethod
    def identify(cls, id):
        '''
        Required class method by flask praetorian that takes a single id and
        returns a user instance if there is one that matches or None if there
        is not
        '''
        return cls.query.get(id)

    def is_valid(self):
        return self.is_active


class Shares(db.Model):
    '''
    Represents the shares of different stock owned by users
    '''
    id = db.Column(db.Integer, primary_key=True)
    symbol = db.Column(db.Text)
    name = db.Column(db.Text)
    shares = db.Column(db.Float, default=0.0)
    buying_value = db.Column(db.Float, default=0.0)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)


    @classmethod
    def lookup(cls, symbol, user_id):
        '''
        Required class method that takes a single username and returns a user
        instance if there is one that matches or None if there is not.
        '''
        return cls.query.filter_by(symbol=symbol, user_id=user_id).one_or_none()



class Transaction(db.Model):
    '''
    Represents all the transactions
    '''
    id = db.Column(db.Integer, primary_key=True)
    symbol = db.Column(db.Text)
    name = db.Column(db.Text)
    amount = db.Column(db.Float)
    date = db.Column(db.DateTime)
    type = db.Column(db.String(20))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
