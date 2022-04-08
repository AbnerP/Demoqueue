import datetime
import json

from flask import redirect, session, request
from pip._vendor import requests

from app import app


clientId = "09be4ea5badf462fbe63a505c183c04d"
clientSecret = "83243ddb2d5c44ebaef3ff58b233982b"
SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
spotify_base_api = "https://api.spotify.com/v1"

class spotify_playlist():
    def __init__(self, name, id, image_url, track_count):
        self.id = id
        self.name = name
        self.image_url = image_url
        self.track_count = track_count

class spotify_track():
    def __init__(self, name, artist, image_url):
        self.name = name
        self.image_url = image_url
        self.artist = artist

@app.route("/spotify_webhook")
def api_callback():

    auth_token = request.args['code']
    code_payload = {
        "grant_type": "authorization_code",
        "code": str(auth_token),
        "redirect_uri": "http://localhost:8080/spotify_webhook",
        'client_id': clientId,
        'client_secret': clientSecret,
    }
    post_request = requests.post(SPOTIFY_TOKEN_URL, data=code_payload)

    response_data = json.loads(post_request.text)
    print(response_data)
    access_token = response_data["access_token"]
    refresh_token = response_data["refresh_token"]
    token_type = response_data["token_type"]
    expires_in = response_data["expires_in"]

    session["spotify_token"] = access_token
    session["spotify_token_expires"] = datetime.datetime.now() + datetime.timedelta(seconds=int(expires_in))

    return redirect("http://localhost:3000/create_event")


def get_user_playlists():
    token = session["spotify_token"]
    authorization_header = {"Authorization": "Bearer {}".format(token)}

    playlist_api_endpoint = "{}/me/playlists".format(spotify_base_api)
    playlists_response = requests.get(playlist_api_endpoint, headers=authorization_header)
    playlist_data = json.loads(playlists_response.text)

    playlists = []
    for playlist in playlist_data["items"]:
        if playlist["tracks"]["total"] == 0:
            continue
        if len(playlist["images"]) > 0:
            img_url = playlist["images"][0]["url"]
        else:
            img_url = ""
        playlists.append(spotify_playlist(
            name=playlist["name"],
            id=playlist["id"],
            image_url=img_url,
            track_count=playlist["tracks"]["total"],
        ))

    return playlists


def get_playlist_songs(playlist_spotify_id):
    token = session["spotify_token"]
    authorization_header = {"Authorization": "Bearer {}".format(token)}

    playlist_api_endpoint = "{}/playlists/{}".format(spotify_base_api, playlist_spotify_id)
    print(playlist_api_endpoint)
    playlist_response = requests.get(playlist_api_endpoint, headers=authorization_header)
    playlist_data = json.loads(playlist_response.text)
    print(playlist_response)

    songs = playlist_data["tracks"]["items"]
    parsed_songs = []
    print(songs[0])

    for song in songs:
        artist = (", ").join([str(a["name"]) for a in song["track"]["artists"]])
        print(artist)
        song_name = song["track"]["name"]
        print(song_name)
        song_img_url = song["track"]["album"]["images"][0]["url"]
        print(song_img_url)
        song_object = spotify_track(name=song_name, artist=artist, image_url=song_img_url)
        print(song_object)
        parsed_songs.append(song_object)

    return parsed_songs
