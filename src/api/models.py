from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, Column, Integer, ForeignKey, String, DateTime, Date, Time, Float

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), unique=True)
    password = db.Column(db.String(250))
    is_active = db.Column(db.Boolean)
    image = db.Column(db.String(250))
    description = db.Column(db.Text)
    is_psychologyst = db.Column(db.Boolean)
    user_company = db.relationship('User_company', lazy=True)
    user_psychologyst = db.relationship('User_psychologyst', lazy=True)
    

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,

            # do not serialize the password, its a security breach
        }

class User_company(db.Model):
    __tablename__ = 'user_company'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(250))
    company_number = db.Column(db.String(80), unique=True)
    User_Id = db.Column(db.Integer, db.ForeignKey("user.id"))
    search_workshop = db.relationship('Search_workshop', lazy=True)

 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class User_psychologyst(db.Model):
    __tablename__ = 'user_psychologyst'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    lastname = db.Column(db.String(250))
    identity_number = db.Column(db.String(250), unique=True)
    association_number = db.Column(db.String(250), unique=True)
    speciality = db.Column(db.String(250))
    User_Id = db.Column(db.Integer, db.ForeignKey("user.id"))
    workshop = db.relationship('Workshop', lazy=True)

 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Category(db.Model):
    __tablename__ = 'category'

    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(250), unique=True)
    search_workshop = db.relationship('Search_workshop', lazy=True)
     
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Search_workshop(db.Model):
    __tablename__ = 'search_workshop'

    id = db.Column(db.Integer, primary_key=True)
    duration = db.Column(db.String(250))
    max_price = db.Column(db.Float)
    date = db.Column(db.Date)
    max_people = db.Column(db.Integer)
    is_active = db.Column(db.Boolean)
    user_company_id = db.Column(db.Integer, db.ForeignKey("user_company.id"))
    category_id = db.Column(db.Integer, db.ForeignKey("category.id"))
 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

workshop_has_category = db.Table('workshop_has_category',
    db.Column('workshop_id', db.Integer, db.ForeignKey("workshop.id"), primary_key=True),
    db.Column('category_id', db.Integer, db.ForeignKey("category.id"), primary_key=True),
)

class Workshop(db.Model):
    __tablename__ = 'workshop'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250))
    duration = db.Column(db.String(250))
    price = db.Column(db.Float)
    date = db.Column(db.Date)
    is_active = db.Column(db.Boolean)
    max_people = db.Column(db.Integer)
    description = db.Column(db.Text)
    user_psychologyst_id = db.Column(db.Integer, db.ForeignKey("user_psychologyst.id"))
    category_info_1 = db.relationship("Category", secondary= workshop_has_category, lazy='subquery',
        backref=db.backref("workshops", lazy=True))
 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

