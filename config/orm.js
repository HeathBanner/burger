var connection = require("./connection.js");
var express = require('express');

var orm = {
    all: function(tableName, cb) {
        connection.query('SELECT * FROM ??', [tableName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, columnName, valueName, cb) {
        connection.query('INSERT INTO ?? (??) VALUES (?);', [tableName, columnName, valueName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, colName, colNameVal, colId, colIdVal) {
        connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?;', [tableName, colName, colNameVal, colId, colIdVal], function(err, result) {
            if (err) throw err;
        });
    },
    deleteOne: function(tableName, colName, colNameVal) {
        connection.query('DELETE FROM ?? WHERE ?? = ?;', [tableName, colName, colNameVal], function(err, result) {
            if (err) throw err;
        });
    }
};

module.exports = orm;