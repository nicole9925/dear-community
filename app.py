from flask import Flask, send_from_directory
from flask_cors import CORS #comment this on deployment

app = Flask(__name__)
CORS(app) #comment this on deployment

@app.route('/')
def index():
    return {'name': 'alice',
                    'email': 'alice@outlook.com'}

if __name__ == '__main__':
    app.run()