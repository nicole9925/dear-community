import flask
from flask import request, jsonify
import mysql.connector
from mysql.connector.constants import ClientFlag
from flask_cors import CORS # comment on deployment

# Setting up configuration for GCP Database
config = {
    'user': 'root',
    'password': 'passwordlol',
    'host': '104.197.129.204',
    'client_flags': [ClientFlag.SSL],
    'ssl_ca': 'server-ca.pem',
    'ssl_cert': 'client-cert.pem',
    'ssl_key': 'client-key.pem',
    'database': 'dear_community_demo'
}

# Setting up Flask application
app = flask.Flask(__name__)
CORS(app) # comment on deployment
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return '''<h1>Dear Community</h1>
<p>An API for listening to your local community.</p>'''


@app.route('/api/v1/resources/questions/all', methods=['GET'])
def questions_api_all():
    # Connect to database
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()

    # Select and retrieve all results
    cursor.execute("SELECT * FROM Questions;")
    result = cursor.fetchall()
    return jsonify(result)


@app.route('/api/v1/resources/questions', methods=['GET'])
def questions_api_id():
    # Ex. /api/v1/resources/question?location=90018&date=2022-02-05
    location = request.args.get('location')
    date = request.args.get('date')

    if date and location: # Correct API query
        # Extracting components
        year = date.split('-')[0]
        month = date.split('-')[1]
        day = date.split('-')[2]

        # Connecting to database and querying results
        conn = mysql.connector.connect(**config)
        cursor = conn.cursor()

        query = '''
        SELECT question FROM Questions
        WHERE location = {0}
        AND YEAR(date) = {1}
        AND MONTH(date) = {2}
        AND DAY(date) = {3}
        ORDER BY RAND()
        LIMIT 1;
        '''.format(location, year, month, day)
        
        cursor.execute(query)
        result = cursor.fetchone()
        
        # Returning results to request
        if result:
            return jsonify(result)
        else:
            return "Error"
    else: # Incorrect API usage
        return "Error"


@app.route('/api/v1/resources/answers/all', methods=['GET'])
def answers_api_all():
    # Connect to database
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()

    # Select and retrieve all results
    cursor.execute("SELECT * FROM Answers;")
    result = cursor.fetchall()
    return jsonify(result)


@app.route('/api/v1/resources/answers', methods=['GET'])
def answers_api_id():
    # Ex. /api/v1/resources/answer?location=90018&date=2022-05-06
    location = request.args.get('location')
    date = request.args.get('date')

    if date and location: # Correct API query
        # Extracting components
        year = date.split('-')[0]
        month = date.split('-')[1]
        day = date.split('-')[2]

        # Connecting to database and querying results
        conn = mysql.connector.connect(**config)
        cursor = conn.cursor()

        query = '''
        SELECT answer FROM Answers
        WHERE location = {0}
        AND YEAR(date) = {1}
        AND MONTH(date) = {2}
        AND DAY(date) = {3}
        ORDER BY RAND()
        LIMIT 10;
        '''.format(location, year, month, day)
        
        cursor.execute(query)
        result = cursor.fetchall()
        
        # Returning results to request
        if result:
            return jsonify(result)
        else:
            return "Error"
    else: # Incorrect API usage
        return "Error"

if __name__ == "__main__":
    app.run()