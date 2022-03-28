import os
from flask_migrate import Migrate
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_restful import Resource, Api


basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__, static_url_path='', static_folder='./../front-end/src')
# Directory for uploading and storing all memes.
UPLOAD_FOLDER = basedir+"/static/memes"
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app.config['SECRET_KEY'] = 'sadfsadfsadfadsfsafgr'
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

db = SQLAlchemy(app)
migrate = Migrate(app, db)
api = Api(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.session_protection = 'strong'
# login_manager.login_view = 'auth.login'

application = app

db.create_all()

@login_manager.user_loader
def load_user(user_id):
    return Host.query.get(int(user_id))

from routes import *
from spotify_client import *