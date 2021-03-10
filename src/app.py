import os
from flask import Flask, request, jsonify, url_for, send_from_directory,current_app
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
# from flask_login import current_user, login_user
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import timedelta
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from passlib.hash import sha256_crypt
from api.utils import APIException, generate_sitemap
from api.models import db, User, User_company, User_psychologist, Category, Search_workshop, Workshop, workshop_has_category
from api.routes import api
from api.admin import setup_admin
from datetime import datetime
from api.mail_api import send_simple_message

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False


# database condiguration
app.config["JWT_TOKEN_LOCATION"] = ["headers"]
app.config["JWT_SECRET_KEY"] = os.getenv("FLASK_APP_KEYS")
app.config["JWT_ALGORITHM"] = "HS256"

jwt = JWTManager(app)

# database condiguration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

CORS(app)

setup_admin(app)
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')   

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
# @jwt_required()
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

@app.route('/user', methods=['POST'])
def add_user():
    body = request.get_json()
    print(body)
    email = body.get("email", None)
    _password = body.get("_password", None)
    facebook = body.get("facebook", None)
    instagram = body.get("instagram", None)
    twitter = body.get("twitter", None)
    linkedIn = body.get("linkedIn", None)
    youTube = body.get("youTube", None)
    is_psychologist = body.get("is_psychologist", None)
    description = body.get("description", None)

    if not email or not _password or is_psychologist is None:
        return "Missing info", 400

    password_hashed = generate_password_hash( _password, method='pbkdf2:sha256', salt_length=8)
    user_id = User.add(
        email, 
        password_hashed, 
        facebook,
        instagram, 
        twitter, 
        linkedIn, 
        youTube, 
        is_psychologist, 
        description
    )

    if is_psychologist:
        psychologist =  User_psychologist(
            name = body.get("name"),
            lastname = body.get("lastname"),
            identity_number = body.get("identity_number"),
            association_number = body.get("association_number") ,            
            speciality = body.get("speciality"),
            user_id=user_id
        )
        psychologist.add()
        return jsonify(psychologist.to_dict()), 201

    company =  User_company(
        company_name = body.get("company_name"),
        company_number = body.get("company_number"),
        user_id = user_id
    )
    company.add()
    return jsonify(company.to_dict()), 201

@app.route('/user/<int:id>', methods=['GET'])
@jwt_required()
def get_user(id):
    user = User.get_by_id(id)
    user_psychologist = User_psychologist.get_by_user_id(user.id)
    user_company = User_company.get_by_user_id(user.id)
    if user.is_active and user.is_psychologist:
        return jsonify(user_psychologist.to_dict()), 200
    if user.is_active and user.is_psychologist == False:
        return jsonify(user_company.to_dict()), 200

@app.route('/user/<int:id>', methods=['PUT'])
@jwt_required()
def update_users(id):
    body = request.get_json()
    user = User.update_single_user(body, id)
    if user.is_active and user.is_psychologist:
        user_psy = User_psychologist.update_psychologist_user(body, id)
        return jsonify(user_psy.to_dict())  
    if user.is_active and user.is_psychologist == False:
        user_comp = User_company.update_company_user(body, id)
        print(user_comp)
        return jsonify(user_comp.to_dict())

# @app.route('/user/<int:id>', methods=['PATCH'])
# @jwt_required()
# def update_user(id):
#     body = request.get_json()
#     user = User.update_single_user(body, id)
#     change_user = User.get_by_id(id)
#     return jsonify(change_user.to_dict())

@app.route('/user/<int:id>', methods=['PATCH']) ##METHOD DELETE
@jwt_required()
def delete_one_user(id):
    user_target = User.delete(id)
    return "Your profile has been deleted", 200

# LOGIN

@app.route('/login', methods=['POST'])
def handle_login():
    email, _password = request.json.get(
            "email", None
        ), request.json.get(
            "_password", None
        )
    if not email or not _password:
        return "Missing info", 400
    user = User.get_by_email(email)
    if check_password_hash(user._password, _password):
        if user.is_psychologist:
            user_psy = User_psychologist.get_by_user_id(user.id)
            access_token = create_access_token(
                identity=user_psy.to_dict(),
                expires_delta=timedelta(minutes=60)
            )
            return jsonify({'token': access_token}), 200
        else:
            user_company = User_company.get_by_user_id(user.id)
            access_token = create_access_token(
                identity=user_company.to_dict(),
                expires_delta=timedelta(minutes=60)
            )
            return jsonify({'token': access_token}), 200
    return "Invalid info", 400

    
## METODOS PARA CREAR EL MURO ##
@app.route('/user/workshops', methods=['GET']) ## /workshop
# @jwt_required()
def get_workshops():
    workshops = Workshop.get_all()
    workshops_to_dict = []
    for workshop in workshops:
        workshops_to_dict.append(workshop.to_dict())

    return jsonify(workshops_to_dict), 200

@app.route('/user/search_workshops', methods=['GET']) ## /search_workshop
# @jwt_required()
def get_search_workshops():
    search_workshops = Search_workshop.get_all()
    search_workshops_to_dict = []
    for search_workshop in search_workshops:
        search_workshops_to_dict.append(search_workshop.to_dict())

    return jsonify(search_workshops_to_dict), 200

##METODOS PARA CATEGORIES Y WORKSHOPS
@app.route('/user/psychologist/<int:id>/workshop', methods=['POST']) ## sin user
# @jwt_required()
def add_workshop(id):
    user_psychologist = User_psychologist.get_by_id(id)
    
    body = request.get_json()

    new_workshop = Workshop(
        title = body.get("title"),
        duration = body.get("duration"),
        price = body.get("price"),
        date = body.get("date"),
        max_people = body.get("max_people"),
        description = body.get("description"),
        user_psychologist_id = user_psychologist.id,
    )

    new_workshop.add(body.get("category_info"))
    return jsonify(new_workshop.to_dict()), 200

@app.route('/user/company/<int:id>/searchworkshop', methods=['POST'])  # sin user
# @jwt_required()
def add_search_workshop(id):
    user_company = User_company.get_by_id(id)
    
    body = request.get_json()

    new_search_workshop = Search_workshop(
        duration = body.get("duration"),
        max_price = body.get("price"),
        date = body.get("date"),
        max_people = body.get("max_people"),
        user_company_id = user_company.id,
        category_id = body.get("category_id")
    )
 
    new_search_workshop.add()

    return jsonify(new_search_workshop.to_dict()), 201

@app.route('/user/category', methods=['POST']) # sin user
# @jwt_required()
def add_category():
    new_category = request.get_json()
    new_category = Category (
        category_name = new_category.get("category_name"),
    )
    new_category.add()
    return jsonify(new_category.to_dict())

@app.route('/user/psychologist/<int:id>/workshops', methods=['GET']) ## sin user
# @jwt_required()
def get_psychologist_workshops(id):
    workshops = Workshop.get_workshop_by_psychologist_id(id)
    workshops_to_dict = []
    for workshop in workshops:
        workshops_to_dict.append(workshop.to_dict())
    return jsonify(workshops_to_dict), 200

@app.route('/user/company/<int:id>/workshops', methods=['GET']) ## sin user
def get_company_workshops(id):
    workshops = Search_workshop.get_workshop_by_company_id(id)
    workshops_to_dict = []
    for workshop in workshops:
        workshops_to_dict.append(workshop.to_dict())

    return jsonify(workshops_to_dict), 200

@app.route('/workshop/<int:id>', methods=['GET']) 
# @jwt_required()
def get_target_workshop(id):
    target_workshop = Workshop.get_by_id(id)
    return jsonify(target_workshop.to_dict()), 200

@app.route('/user/search_workshop/<int:id>', methods=['PUT']) ## company/id/search_workshop/id
# @jwt_required()
def update_search_workshop(id):
    body = request.get_json()
    search_workshop = Search_workshop.get_by_id(id)

    new_search_workshop = search_workshop.update_search_workshop(body['duration'], 
    body['price'], body['date'], body['max_people'], body['category_id'])

    return jsonify(new_search_workshop.to_dict())

@app.route('/user/workshop/<int:id>', methods=['PUT']) ## psychologist/id/workshop/id
# @jwt_required()
def update_workshop(id):
    body = request.get_json()
    workshop = Workshop.get_by_id(id)
    new_workshop = workshop.update_workshop(body['title'], body['duration'], 
    body['price'], body['date'], body['max_people'], 
    body['description'], body['category_info'])
    return jsonify(new_workshop.to_dict())
  
@app.route('/psychologist/workshop/<int:id>', methods=['DELETE']) ## psychologist/id/workshop/id
# @jwt_required()
def delete_one_workshop(id):
    workshop = Workshop.get_by_id(id)
    workshop.delete()
    return workshop.to_dict(), 200
    
@app.route('/company/workshop/<int:id>', methods=['DELETE']) ## company/id/search_workshop/id
# @jwt_required()
def delete_one_search_workshop(id):
    search_workshop = Search_workshop.get_search_workshop_by_id(id)
    search_workshop.delete()
    return search_workshop.to_dict(), 200

# CONTACT FORM

@app.route('/contact', methods=['POST']) ## user/id/contact
# @jwt_required()
def send_email():
    body = request.get_json()
    email_from = body.get("email_from")
    email_to = body.get("email_to")
    subject = body.get("subject")
    message = body.get("message")
    send_simple_message(
       email_from,
       email_to, 
       subject, 
       message)
    return "hemos mandado algo?", 200

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
