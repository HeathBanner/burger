var express = require('express');
var app = express();
var router = express.Router();
var burger = require('../models/burgers.js');

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');

router.get('/', function(req, res) {
    burger.all(function(data) {
        var pageIndex = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        
        var devouredCounter = 0;
        var freshCounter = 0;

        var devouredPageNumber = 1;
        var freshPageNumber = 1;
        
        var burgersObj;

        if (data.length >= 4) {
            for (var i in data) {
                if (data[i].devoured) {
                    devouredCounter++;
                    if(devouredCounter === 4) {
                        devouredCounter = 0;
                        pageNumber++;
                    }
                    data[i].devouredPageNumber = pageIndex[devouredPageNumber];
                } else if (!data[i].devoured) {
                    freshCounter++;
                    if (freshCounter === 4) {
                        freshCounter = 0;
                        freshPageNumber++;
                    }
                    data[i].freshPageNumber = pageIndex[freshPageNumber];
                }
            } 
            data.totalDevPages = pageIndex[devouredPageNumber];
            data.totalFreshPages = pageIndex[freshPageNumber];
            burgersObj = {
                burgers: data
            };
        } else {
            burgersObj = {
                burgers: data
            };
        }
        console.log(burgersObj);
        res.render('index', burgersObj);
    });
});

router.post('/', function(req, res) {
    var newBurger = req.body.burger.toString();
    burger.createBurger(newBurger, function(data) {   
        var resultObj = {
            response: data
        };
        res.redirect('/');
    });
});

router.put('/burgers/:id', function(req, res) {
    var id = req.params.id;
    var devoured = req.body.burger;
    burger.updateBurger(devoured, id);
    res.end();
});

router.delete('/burgers/:id', function(req, res) {
    var id = req.params.id;
    burger.deleteBurger(id);
    res.end();
});

module.exports = router;