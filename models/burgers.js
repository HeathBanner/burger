var orm = require('../config/orm.js');

module.exports = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        });
    },
    createBurger: function(tableName, cb) {
        orm.insertOne('burgers', 'burger_name', tableName, function(res) {
            cb(res);
        });
    },
    updateBurger: function(colNameVal, colIdVal) {
        orm.updateOne('burgers', 'devoured', colNameVal, 'id', colIdVal)
    },
    deleteBurger: function(id) {
        orm.deleteOne('burgers', 'id', id);
    }
};