"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, User_company, User_psychologist, Category, Search_workshop, Workshop 
from api.routes import api
from api.admin import setup_admin
#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

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

# any other endpoint will try to serve it like a static file
@app.route('/user', methods=['POST'])
def add_user():
    body = request.get_json()
    if not body.get("email") or not body.get("password"):
        return "Error!", 400

    new_user = User(
        email = body.get("email"),
        password = body.get("password"),
        facebook = body.get("facebook"),
        instagram = body.get("instagram"),
        twitter = body.get("twitter"),
        linkedIn = body.get("linkedIn"),
        youTube = body.get("youTube"),
        is_psychologist = body.get("is_psychologist"),
    )
    new_user.add()

    if body.get("is_psychologist"):
        new_user_psy = User_psychologist(
            name = body.get("name"),
            lastname = body.get("lastname"),
            identity_number = body.get("number"),
            association_number = body.get("association_number"),             
            speciality = body.get("speciality"),
            user_id = new_user.id
        )
        new_user_psy.add()
        return jsonify(new_user_psy.to_dict()), 200

    new_user_company = User_company(
        company_name = body.get("company_name"),
        company_number = body.get("company_number"),
        user_id = new_user.id
    )
    new_user_company.add()
    return jsonify(new_user_company.to_dict()), 200


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
  


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)


