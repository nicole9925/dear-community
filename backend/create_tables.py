
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
        [1241, "2022-02-06 18:41:11", "What is the essence of well-being?", 90018],
        [1112, "2022-05-06 18:41:11", "How are you feeling?", 90018],
        [1122, "2022-05-06 18:41:01", "How are we?", 90018],
        [1123, "2022-05-06 18:51:11", "How are you alive?", 90018],
        [1124, "2022-05-06 19:41:11", "How are you feeling?3", 90018],
        [1125, "2022-05-06 20:41:11", "How are you feeling?4", 90018],
        [1126, "2022-05-06 21:41:11", "How are you feeling?5", 90018],
        [1127, "2022-05-06 22:41:11", "How are you feeling?6", 90018],
        [1128, "2022-05-06 23:41:11", "How are you feeling?7", 90018],
        [1113, "2022-02-05 18:41:11", "What's up?", 90018],
        [1114, "2022-04-15 18:41:11", "Why is the sky blue?", 90018],
        [1115, "2022-12-05 18:41:11", "How many licks does it take to get to the center of a tootsie pop?", 89147],
        [1116, "2022-8-05 18:41:11", "Why?", 89147],
        [1117, "2022-7-05 18:41:11", "Is USC fun?", 90018],
        [1118, "2022-05-06 18:41:11", "Hello?!?!?!?!", 90018]]
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
        [1112, "2022-02-06 18:41:11", "Well-being is having great relationships with the people around you.", 90018],
        [1122, "2022-02-06 18:41:01", "Having money.", 90018],
        [1123, "2022-02-06 18:51:11", "Being safe, in good health, and content with your life.", 90018],
        [1124, "2022-02-06 19:41:11", "The essence of well-being is the spiritual connection you have with your body's inner chakra.", 90018],
        [1125, "2022-02-06 20:41:11", "Loving your community.", 90018],
        [1126, "2022-02-06 21:41:11", "Having someone who takes care of you, like my beautiful neighbor, Peter.", 90018],
        [1127, "2022-02-06 22:41:11", "I don't think there is such a thing as well-being, only existing within a temporary universe..", 90018],
        [1128, "2022-02-06 23:41:11", "Well being is working out everyday, eating right, and staying active.", 90018],
        [1113, "2022-02-05 18:41:11", "Terrible.", 90018],
        [1114, "2022-04-15 18:41:11", "Fantastic.", 90018],
        [1115, "2022-12-05 18:41:11", "Aight.", 89147],
        [1116, "2022-8-05 18:41:11", "Sup.", 89147],
        [1117, "2022-7-05 18:41:11", "YOLO.", 90018],
        [1118, "2022-02-06 18:41:11", "Keanu Reeves", 90018]]
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