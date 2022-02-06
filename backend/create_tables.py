
import mysql.connector
from mysql.connector.constants import ClientFlag

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

# Establish our connection
conn = mysql.connector.connect(**config)
cursor = conn.cursor()  # initialize connection cursor

# Creating tables for User Questions
query = "DROP TABLE IF EXISTS Questions;"
cursor.execute(query)

query = '''
CREATE TABLE Questions (
    user_id INT,
    date DATETIME,
    question TEXT,
    location INT,
    PRIMARY KEY (user_id, date)
);
'''
cursor.execute(query)

''' ********TESTING THE DATA INPUT********* '''
# Generating sample data and inserting into database
data = [[1111, "2022-02-05 18:41:11", "How are you?", 89147],
        [1112, "2022-05-06 18:41:11", "How are you feeling?", 90018]]
query = '''
INSERT INTO Questions (user_id, date, question, location)
VALUES (%s, %s, %s, %s);
'''
cursor.executemany(query, data)

# Querying the data
cursor.execute("SELECT * FROM Questions;")
result = cursor.fetchall()
for row in result:
    print(row)

# Creating tables for User Answers
query = "DROP TABLE IF EXISTS Answers;"
cursor.execute(query)

query = '''
CREATE TABLE Answers (
    user_id INT,
    date DATETIME,
    answer TEXT,
    location INT,
    PRIMARY KEY (user_id, date)
);
'''
cursor.execute(query)

''' ********TESTING THE DATA INPUT********* '''
# Generating sample data and inserting into database
data = [[1111, "2022-02-05 18:41:11", "Good.", 89147],
        [1112, "2022-05-06 18:41:11", "I'm alright.", 90018]]
query = '''
INSERT INTO Answers (user_id, date, answer, location)
VALUES (%s, %s, %s, %s);
'''
cursor.executemany(query, data)

# Querying the data
cursor.execute("SELECT * FROM Answers;")
result = cursor.fetchall()
for row in result:
    print(row)

conn.commit() # Commit results
conn.close() # Close connection