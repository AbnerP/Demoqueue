import datetime

from flask import render_template, redirect, url_for, request, flash, session, send_from_directory
from flask_login import login_required, logout_user, current_user, login_user

from app import app, db
from models import Host, Event, Song
from spotify_client import get_user_playlists, get_playlist_songs, spotify_track

@app.route('/sign_out')
@login_required
def sign_out():
    logout_user()
    return 200

@app.route('/login', methods=['GET', 'POST'])
@login_required
def login():
    if request.method == 'POST':
        user = Host.query.filter_by(username=request.json['username'])
        if user.verify_password(request.json['password']):
            login_user(user)
            return 200
        else:
            return 400
    else:
        return {"authenticated": current_user.is_authenticated}, 200


@app.route('/sign_up', methods=['POST'])
def sign_up():
    # TODO validate username and password
    try:
        user = Host(username=request.json['username'],
                    password=request.json['password'])
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        return {"error": str(e)}, 200
    user = Host.query.filter_by(username=request.json['username']).one()
    login_user(user, remember=True, force=True)
    return {"username": user.username, "authenticated": current_user.is_authenticated}, 200