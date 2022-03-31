import datetime

from flask import redirect, request, session
from flask_login import login_required, logout_user, current_user, login_user

from app import app, db
from models import Host, Event, Song
from spotify_client import get_user_playlists, get_playlist_songs, spotify_track, clientId

@app.route('/sign_out')
@login_required
def sign_out():
    logout_user()
    return 200

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = Host.query.filter_by(username=request.json['username']).one()
        if user.verify_password(request.json['password']):
            login_user(user)
            return {"authenticated": current_user.is_authenticated}, 200
        else:
            return {"authenticated": current_user.is_authenticated}, 200
    else:
        link = ""
        authenticated = current_user.is_authenticated
        spotifyAuth = True

        if session.get('spotify_token', None) is None \
                or session.get('spotify_token_expires', None) is None \
                or session['spotify_token_expires'] < datetime.datetime.now():

            spotifyAuth = False
            authEndpoint = "https://accounts.spotify.com/authorize"
            redirectUri = "http://localhost:5000/spotify_webhook"

            scopes = [
                "user-read-currently-playing",
                "user-read-playback-state",
                "playlist-read-private",
                "user-modify-playback-state"
            ]

            scopesStr = "%20".join(scopes)
            link = f"{authEndpoint}?client_id={clientId}&redirect_uri={redirectUri}&scope={scopesStr}&response_type=code&show_dialog=true"

        return {"authenticated": authenticated, "spotifyAuthorized": spotifyAuth, "spotifyAuthLink": link}, 200


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

@app.route('/new_event', methods=['POST'])
def new_event():
    # should pass in username and playlist ID
    pass

