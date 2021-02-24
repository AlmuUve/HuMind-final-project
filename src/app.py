"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory,current_app
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
# from flask_login import current_user, login_user
import datetime
from werkzeug.security import generate_password_hash, check_password_hash

# from datetime import timedelta
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
# from passlib.hash import sha256_crypt
from api.utils import APIException, generate_sitemap
from api.models import db, User, User_company, User_psychologist, Category, Search_workshop, Workshop
from api.routes import api
from api.admin import setup_admin
#from models import Person


ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

app.config["JWT_TOKEN_LOCATION"] = ["headers", "cookies", "json", "query_string"]
app.config["JWT_COOKIE_SECURE"] = False
app.config["JWT_SECRET_KEY"] = os.getenv("FLASK_APP_KEYS")

jwt = JWTManager(app)

# database condiguration
if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

@app.route('/login', methods=['POST'])
def handle_login():
    email, password = request.json.get(
            "email", None
        ), request.json.get(
            "password", None
        )
    if not email or not password:
        return "Missing info", 400

    user = User.get_by_email(email)
    if check_password_hash(user.get_password(), password):
        access_token = create_access_token(
            identity=user.to_dict(),
            expires_delta=timedelta(minutes=60)
        )
        return jsonify({'token': access_token}), 200

    return "Invalid info", 400

@app.route('/user', methods=['POST'])
def add_user():
    body = request.get_json()
    email = body.get("email", None),
    password = body.get("password", None),
    facebook = body.get("facebook", None),
    instagram = body.get("instagram", None),
    twitter = body.get("twitter", None),
    linkedIn = body.get("linkedIn", None),
    youTube = body.get("youTube", None),
    is_psychologist = body.get("is_psychologist", None),
    description = body.get("description", None)

    if not email or not password or not is_psychologist:
        return "Missing info", 400

    password_hashed = generate_password_hash( body.get("password"), method='pbkdf2:sha256', salt_length=8)
    print(password_hashed)
    user_id = User.add(
        email, 
        password, 
        facebook,
        instagram, 
        twitter, 
        linkedIn, 
        youTube, 
        is_psychologist, 
        description
    )
    print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    if is_psychologist:
        psychologist =  User_psychologist(
            name = body.get("name"),
            lastname = body.get("lastname"),
            identity_number = body.get("identity_number"),
            association_number = body.get("association_number") ,            
            speciality = body.get("speciality"),
            user_id=user_id
        )
        print(f' Psico{psychologist}')
        psychologist.add()
        return jsonify(psychologist.to_dict()), 201

    company =  User_company(
        company_name = body.get("company_name"),
        company_number = body.get("company_number"),
        user_id = user_id
    )
    company.add()
    return jsonify(company.to_dict()), 201

@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    _password = request.json.get("_password", None)
    if not email or not _password:
        return "Could not verify Email or Password", 400  
    
    user = User.query.filter_by(email=email).first()
    if not user:
        return "User not found", 404 
    
    if not werkzeug.security.check_password_hash(user._password, _password): 
        return "Invalid Login Info!", 400
    else: 
        access_token = create_access_token(
            identity={"email": email}, 
            expires_delta=datetime.timedelta(minutes=60)
        )
        return {"access_token": access_token}, 200


@app.route('/user/company/<int:id>', methods=['GET'])
@jwt_required()
def get_user_company_information(id):
    user = User.get_by_id(id)
    user_company = User_company.get_by_user_id(user.id)
    if user.is_active:
        return jsonify(user_company.to_dict()), 200
    else:
        return "This profile doesnt exists", 400

@app.route('/user/psychologist/<int:id>', methods=['GET'])
@jwt_required()
def get_user_psychologist_information(id):
    user = User.get_by_id(id)
    user_psychologist = User_psychologist.get_by_user_id(user.id)
    if user.is_active:
        return jsonify(user_psychologist.to_dict()), 200
    else:
        return "This profile doesnt exists", 400


@app.route('/user/<int:id>', methods=['PUT'])
def update_user(id):
    body = request.get_json()
    user = User.update_single_user(body, id)
    change_user = User.get_by_id(id)
    return jsonify(change_user.to_dict())

@app.route('/user/<int:id>/psychologist', methods=['PUT'])
def update_psychologist_user(id):
    body = request.get_json()
    user = User_psychologist.update_psychologist_user(body, id)
    change_user = User_psychologist.get_by_user_id(id)
    return jsonify(change_user.to_dict())

  
@app.route('/user/<int:id>/company', methods=['PUT'])
def update_company_user(id):
    body = request.get_json()
    user = User_company.update_company_user(body, id)
    change_user = User_company.get_by_id(id)
    return jsonify(change_user.to_dict())

@app.route('/user/<int:id>', methods=['PATCH'])
def delete_one_user(id):
    user_target = User.delete_user(id)
    return "Your profile has been deleted", 200


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)


