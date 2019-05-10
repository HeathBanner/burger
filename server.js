var express = require('express');
var app = express();
var orm = require('./config/orm.js');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');

//==============================================================//

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));
app.use(routes);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});