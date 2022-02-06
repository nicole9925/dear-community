
import mysql.connector
from mysql.connector.constants import ClientFlag

config = {
    'user': 'root',
    'password': 'passwordlol',
    'host': '104.197.129.204',
    'client_flags': [ClientFlag.SSL],
    'ssl_ca': 'server-ca.pem',
    'ssl_cert': 'client-cert.pem',
    'ssl_key': 'client-key.pem'
}

# now we establish our connection
conn = mysql.connector.connect(**config)

cursor = conn.cursor()  # initialize connection cursor
cursor.execute('CREATE DATABASE dear_community_demo')  # create a new 'testdb' database
conn.close()  # close connection because we will be reconnecting to testdb