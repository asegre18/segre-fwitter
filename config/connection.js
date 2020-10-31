const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'fwitter_db',
}).promise();

module.exports = connection;
