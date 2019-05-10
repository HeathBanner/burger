var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.log("error connection: " + err.stack);
        return;
    }
});

module.exports = connection;