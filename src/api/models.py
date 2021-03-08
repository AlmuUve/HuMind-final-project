from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, Column, Integer, ForeignKey, String, DateTime, Date, Time, Float
db = SQLAlchemy()
class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.VARCHAR, unique=True)
    _password = db.Column(db.VARCHAR)
    is_active = db.Column(db.Boolean, default=True)
    image = db.Column(db.VARCHAR)
    facebook = db.Column(db.VARCHAR)
    instagram = db.Column(db.VARCHAR)
    twitter = db.Column(db.VARCHAR)
    linkedIn = db.Column(db.VARCHAR)
    youTube = db.Column(db.VARCHAR)
    description = db.Column(db.Text)
    is_psychologist = db.Column(db.Boolean)
    user_company = db.relationship('User_company', cascade="all, delete", lazy=True)
    user_psychologist = db.relationship("User_psychologist", cascade="all, delete", lazy=True)

    def __repr__(self):
        return f'User {self.email}'

    def to_dict(self):
        return {
        "is_active": self.is_active,
        "id": self.id,
        "email": self.email,
        "is_psychologist": self.is_psychologist,
        }


    @classmethod
    def get_by_email(cls, email):
        return cls.query.filter_by(
            email = email
        ).first_or_404(
            description = f'Error!'
        )

    @classmethod
    def add(cls, email, _password, facebook, instagram, twitter, linkedIn, youTube, is_psychologist, description):
        user = cls(
            email=email, 
            _password=_password,
            facebook=facebook,
            instagram=instagram, 
            twitter=twitter, 
            linkedIn=linkedIn, 
            youTube=youTube, 
            is_psychologist=is_psychologist, 
            description=description
        )
        db.session.add(user)
        db.session.commit()
        return user.id

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.filter_by(id = id).first()
        return user

    @classmethod
    def delete_user(cls, id):
        target = cls.query.filter_by(id = id).first()
        target.is_active=False        
        db.session.commit()
        return target
    
    @classmethod
    def update_single_user(cls, user_data, id):
        user= cls.query.filter_by(id = id).first()
        user.email= user_data["email"]
        user._password= user_data["_password"]
        user.description= user_data["description"]
        user.is_psychologist= user.is_psychologist
        user.is_active= user.is_active
        db.session.commit()
 

class User_company(db.Model):
    __tablename__ = 'user_company'
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.VARCHAR)
    company_number = db.Column(db.VARCHAR, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    search_workshop = db.relationship('Search_workshop', lazy=True)

    def __repr__(self):
        return f'User company {self.company_name}'

    def to_dict(self):
        user = User.get_by_id(self.user_id)
        return {
            "id": self.id,
            "company_name": self.company_name,
            "company_number": self.company_number,
            "user_id": self.user_id,
            "is_psychologist": user.is_psychologist,
            "email": user.email,
            "description": user.description,
            "is_active": user.is_active,
            "facebook": user.facebook,
            "instagram": user.instagram,
            "twitter": user.twitter,
            "linkedIn": user.linkedIn,
            "youTube": user.youTube,
        }

    def add(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_by_user_id(cls, user):
        user_company = cls.query.filter_by(user_id=user).first()
        return user_company

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.get(id)
        return user

    @classmethod    
    def update_company_user(cls, user_data, id):
        user= cls.query.filter_by(id = id).first()
        user.company_name= user_data["company_name"]
        db.session.commit()   

class User_psychologist(db.Model):
    __tablename__ = 'user_psychologist'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.VARCHAR)
    lastname = db.Column(db.VARCHAR)
    identity_number = db.Column(db.VARCHAR, unique=True)
    association_number = db.Column(db.VARCHAR, unique=True)
    speciality = db.Column(db.VARCHAR)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    workshop = db.relationship('Workshop', lazy=True)
 
    def __repr__(self):
        return f'User psychologist {self.name}'

    def to_dict(self):
        user = User.get_by_id(self.user_id)
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "identity_number": self.identity_number,
            "association_number": self.association_number,
            "speciality": self.speciality,
            "user_id": self.user_id,
            "is_psychologist": user.is_psychologist,
            "email": user.email,
            "description": user.description,
            "is_active": user.is_active,
            "facebook": user.facebook,
            "instagram": user.instagram,
            "twitter": user.twitter,
            "linkedIn": user.linkedIn,
            "youTube": user.youTube,
        }

    @classmethod
    def get_wokshops_list(cls, id):
        workshops = []
        psychologists = cls.query.filter_by(id = id).all()
        for psychologist in psychologists:
            for workshop in psychologist.workshop:
                workshops.append(workshop.id)
        return workshops

    def add(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_by_user_id(cls, user):
        user_psychologist = cls.query.filter_by(user_id=user).first()
        return user_psychologist

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.filter_by(id = id).first_or_404()
        return user
        
    @classmethod
    def update_psychologist_user(cls, user_data, id):
        user= cls.query.filter_by(user_id = id).first()
        user.name= user_data["name"]
        user.lastname= user_data["lastname"]
        user.speciality= user_data["speciality"]
        db.session.commit()           

    def add(self):
        db.session.add(self)
        db.session.commit()  

workshop_has_category = db.Table('workshop_has_category',
    db.Column('workshop_id', db.Integer, db.ForeignKey("workshop.id"), primary_key=True),
    db.Column('category_id', db.Integer, db.ForeignKey("category.id"), primary_key=True),
)

class Category(db.Model):
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.VARCHAR, unique=True)
    search_workshop = db.relationship('Search_workshop', cascade="all, delete", lazy=True)
     

    def __repr__(self):
        return f'Category {self.category_name}'

    def to_dict(self):
        return {
            "id": self.id,
            "category_name": self.category_name,
        }

    @classmethod
    def get_by_id(cls, id):
        category = cls.query.get(id)
        return category

    @classmethod
    def get_all_categories(cls):
        all_categories = cls.query.all()
        return all_categories
    
    @classmethod
    def get_by_name(cls, name):
        category = cls.query.filter_by(category_name = id).first()
        return category_name

    @classmethod
    def get_all(cls):
        list_of_categories = cls.query.all()
        return list_of_categories

    def add(self):
        db.session.add(self)
        db.session.commit()

class Search_workshop(db.Model):
    __tablename__ = 'search_workshop'
    id = db.Column(db.Integer, primary_key=True)
    duration = db.Column(db.VARCHAR)
    max_price = db.Column(db.Float)
    date = db.Column(db.Date)
    max_people = db.Column(db.Integer)
    is_active = db.Column(db.Boolean, default=True)
    user_company_id = db.Column(db.Integer, db.ForeignKey("user_company.id"))
    category_id = db.Column(db.Integer, db.ForeignKey("category.id"))

    def __repr__(self):
        return f'Search_workshop {self.user_company_id} and {self.id}'

    def to_dict(self):
        user = User_company.get_by_id(self.user_company_id)
        new_category = Category.get_by_id(self.category_id)
        return {
            "id": self.id,
            "duration": self.duration,
            "max_price": self.max_price,
            "price": self.max_price,
            "date": self.date.isoformat(),
            "max_people": self.max_people,
            "is_active": self.is_active,
            "user_company_id": self.user_company_id,
            "category_id": self.category_id,
            "owner": user.company_name,
            "category": new_category.category_name
        }
    
    @classmethod
    def get_all(cls):
        search_workshops = cls.query.all()
        return search_workshops

    @classmethod
    def get_by_id(cls, id):
        search = cls.query.get(id)
        return search

    def update_search_workshop(self, 
                            new_duration, 
                            new_price, 
                            new_date, 
                            new_max_people, 
                            new_category):
        self.duration = new_duration
        self.max_price = new_price
        self.date = new_date
        self.max_people = new_max_people
        self.category_id = new_category
        db.session.commit()
        return self 

    @classmethod
    def get_search_workshop_by_id(cls, id):
        search_workshop = cls.query.filter_by(id = id).first()
        return search_workshop

    def delete(self):
        db.session.delete(self)
        db.session.commit()
        return "Your search has been deleted", 200

    def add(self):
        db.session.add(self)
        db.session.commit()

class Workshop(db.Model):
    __tablename__ = 'workshop'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.VARCHAR)
    duration = db.Column(db.VARCHAR)
    price = db.Column(db.Float)
    date = db.Column(db.Date)
    is_active = db.Column(db.Boolean, default=True)
    max_people = db.Column(db.Integer)
    description = db.Column(db.Text)
    user_psychologist_id = db.Column(db.Integer, db.ForeignKey("user_psychologist.id"))
    category_info = db.relationship("Category", secondary= workshop_has_category, lazy='subquery',
        backref=db.backref("workshops", lazy=True))
    def __repr__(self):
        return f'Workshop {self.title} and owner {self.user_psychologist_id}'

    def to_dict(self
    ):
        
        return {
            "id": self.id,
            "title": self.title,
            "duration": self.duration,
            "price": self.price,
            "date": self.date.isoformat(),
            "is_active": self.is_active,
            "max_people": self.max_people,
            "description": self.description,
            "user_psychologist_id": self.user_psychologist_id,
            "owner_name": user.name,
            "owner_lastname": user.lastname,
            "categories": list(map(lambda category: category.category_name, self.category_info))
        }
    
    @classmethod
    def get_all(cls):
        workshops = cls.query.all()
        return workshops

    @classmethod
    def get_workshop_by_psychologist_id(cls, id):
        workshop_by_psychologist_id = cls.query.filter_by(user_psychologist_id = id)
        return workshop_by_psychologist_id

    @classmethod
    def get_workshop_by_id(cls, id):
        workshop = cls.query.filter_by(id = id).first()
        return workshop

    @classmethod
    def get_categories_by_workshop_id(cls, id):
        categories = []
        workshops = cls.query.filter_by(id = id).all()
        for workshop in workshops:
            for category in workshop.category_info:
                categories.append(category.category_name)
        return categories

    def get_category_by_name(self, category_info):
        categories = []
        for category in category_info:
            new_category_list = Category.get_by_id(category)
            categories.append(new_category_list.category_name)
        return categories

    @classmethod
    def get_by_id(cls, id):
        workshop = cls.query.get(id)
        return workshop

    @classmethod
    def get_by_user_id(cls, id):
        workshop_by_user = cls.query.filter_by(user_psychologist_id = id).all()
        return workshop_by_user

    @classmethod
    def get_workshop_by_psychologist_id(cls, id):
        workshop_by_psychologist_id = cls.query.filter_by(user_psychologist_id = id)
        return workshop_by_psychologist_id

    def update_workshop(self, 
                        new_title, 
                        new_duration, 
                        new_price, 
                        new_date, 
                        new_max_people, 
                        new_description, 
                        category_info):
        self.title = new_title
        self.duration = new_duration
        self.price = new_price
        self.date = new_date
        self.max_people = new_max_people
        self.description = new_description
        new_category_list = []
        for category in category_info:
            new_categories = Category.get_by_id(category)
            new_category_list.append(new_categories)
        self.category_info = new_category_list
        db.session.commit()
        return self 

    def add(self, category_info):
        for category in category_info:
            self.category_info.append(Category.get_by_id(category))
        db.session.add(self)
        db.session.commit()
       
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        return "Your workshop has been deleted", 200



