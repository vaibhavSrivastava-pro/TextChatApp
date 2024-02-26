import sys
from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS
import os, requests

app = Flask(__name__)
CORS(app)
load_dotenv()

@app.route('/login', methods=['POST'])
def login():
    response = requests.get('https://api.chatengine.io/users/me/', 
        headers={ 
            "Project-ID": '3ea168f9-fd95-4fec-9f14-911e487330bd',
            "User-Name": request.get_json()['username'].strip('"'),
            "User-Secret": request.get_json()['secret'].strip('"')
        }
    )
    # print("CHAT_ENGINE_PROJECT_ID", os.environ['CHAT_ENGINE_PROJECT_ID'])
    return response.json()

@app.route('/signup', methods=['POST'])
def signup():
    response = requests.post('https://api.chatengine.io/users/', 
        data={
            "username": request.get_json()['username'].strip('"'),
            "secret": request.get_json()['secret'].strip('"'),
            "email": request.get_json()['email'].strip('"'),
            "first_name": request.get_json()['first_name'].strip('"'),
            "last_name": request.get_json()['last_name'].strip('"'),
        },
        headers={ "Private-Key": 'b79eef42-0e64-469b-a2eb-83cd17f56fd9' }
    )
    return response.json()