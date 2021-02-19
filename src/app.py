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
    if body.get("email", None):
        new_user = User(
            email = body.get("email"),
            password = body.get("password"),
            description = body.get("description"),
            is_psychologist = body.get("is_psychologist"),
            is_active = body.get("is_active")
        )
        print("hola", new_user)
        new_user.add()
        return jsonify(new_user.to_dict()), 200
    return "NO SE CREA NADA AMIGO MIO", 400

@app.route('/user/<int:id>/psychologist', methods=['POST'])
def add_user_psychologist(id):
    body = request.get_json()
    if body.get("association_number", None):
        new_user = User_psychologist(
            name = body.get("name"),
            lastname = body.get("lastname"),
            identity_number = body.get("identity_number"),
            association_number = body.get("association_number"),
            speciality = body.get("speciality"),
            user_id = id,            
        )
        new_user.add()
        return jsonify(new_user.to_dict()), 200
    return "NO SE CREA NADA AMIGO MIO", 400

@app.route('/user/<int:id>', methods=['GET'])
def get_user_information(id):
    user = User.get_by_id(id)
    if user:
        return jsonify(user.to_dict()), 200
    else: "User nor found", 404

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

@app.route('/user/<int:id>', methods=['DELETE'])
def delete_one_user(id):
    User.delete_user(id)
    return "User Deleted Successfully", 200

@app.route('/user/<int:id>', methods=['DELETE'])
def delete_one_user(id):
    User.delete_user(id)
    return "User Deleted Successfully", 200

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)


