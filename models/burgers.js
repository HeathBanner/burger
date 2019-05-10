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
        console.log('BEFORE BURGER')
        orm.updateOne('burgers', 'devoured', colNameVal, 'id', colIdVal)
        console.log('AFTER BURGER');
    },
    deleteBurger: function(id) {
        console.log("BEFORE BURGERS FUNCTION");
        orm.deleteOne('burgers', 'id', id);
        console.log("AFTER BURGERS FUNCTION");
    }
};