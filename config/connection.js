var mysql = require('mysql');

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'nhszbof9kg37sb3r',
        port: '3306',
        password: 'xjo9o440vbktrbd7',
        database: '	aa7ifcj0oa89o9vy'
    });
}

connection.connect(function(err) {
    if (err) {
        console.log("error connection: " + err.stack);
        return;
    }
});

module.exports = connection;