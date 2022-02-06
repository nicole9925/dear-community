import flask
from flask import request, jsonify
import mysql.connector
from mysql.connector.constants import ClientFlag

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
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return '''<h1>Dear Community</h1>
<p>An API for listening to your local community.</p>'''


@app.route('/api/v1/resources/questions/all', methods=['GET'])
def api_all():
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM Questions;")
    result = cursor.fetchall()
    return jsonify(result)


@app.route('/api/v1/resources/books', methods=['GET'])
def api_id():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify an id."

    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for book in books:
        if book['id'] == id:
            results.append(book)

    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return jsonify(results)

if __name__ == "__main__":
    app.run()