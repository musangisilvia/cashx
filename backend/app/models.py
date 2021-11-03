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
