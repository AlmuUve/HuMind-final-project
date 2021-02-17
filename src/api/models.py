from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, Column, Integer, ForeignKey, String, DateTime, Date, Time, Float

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    image = db.Column(db.String(250), unique=False, nullable=False)
    description = db.Column(db.Text(1000), unique=False, nullable=False)
    is_psicologyst = db.Column(db.Boolean(), unique=False, nullable=False)
    user_company = db.relationship('User_company', lazy=True)
    user_psicologyst = db.relationship('User_psicologyst', lazy=True)
    

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class User_company(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(250), unique=False, nullable=False)
    company_number = db.Column(db.String(80), unique=True, nullable=False)
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
    
class User_psicologyst(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    lastname = db.Column(db.String(250), unique=False, nullable=False)
    identity_number = db.Column(db.String(250), unique=True, nullable=False)
    association_number = db.Column(db.String(250), unique=True, nullable=False)
    speciality = db.Column(db.String(250), unique=False, nullable=False)
    User_Id = db.Column(db.Integer, db.ForeignKey("user.id"))
    workshop = db.relationship('workshop', lazy=True)

 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Search_workshop(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    duration = db.Column(db.String(250), unique=False, nullable=False)
    max_price = db.Column(db.Float(), unique=False, nullable=False)
    date = db.Column(db.Date(), unique=False, nullable=False)
    max_people = db.Column(db.Intenger(), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    user_company_id = db.Column(db.Integer, db.ForeignKey("user_company.id"))
    category_id = db.Column(db.Intenger(), db.ForeignKey("category.id"))
 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Workshop(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), unique=False, nullable=False)
    duration = db.Column(db.String(250), unique=False, nullable=False)
    price = db.Column(db.Float(), unique=False, nullable=False)
    date = db.Column(db.Date(), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    max_people = db.Column(db.Intenger(), unique=False, nullable=False)
    description = db.Column(db.Text(1000), unique=False, nullable=False)
    user_psicologyst_id = db.Column(db.Integer, db.ForeignKey("user_psicologyst.id"))
    # category_id = db.Column(db.Intenger(), db.ForeignKey("category.id"))
 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(250), unique=True, nullable=False)
    # search_workshop = db.relationship('Search_workshop', lazy=True)
 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Workshop_has_category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    workshop_id =  db.Column(db.Integer, db.ForeignKey("workshop.id"))
    category_id =  db.Column(db.Integer, db.ForeignKey("category.id"))

 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }