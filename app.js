var express = require('express')
  , hbs = require('hbs')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , helmet = require('helmet')
  ;

// Handlebars Configuration
// ========================
require('./lib/handlebars_helpers.js')(hbs)


// Express Configuration
// =====================

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));
app.use(helmet.hsts());
app.use(helmet.hidePoweredBy())




// ROUTES
// =============================
app.get('/', function(req,res){
  res.render('index', {
    layout:''
  });
});
app.get('/styleguide', function(req,res){
  res.render('styleguide', {
    layout:'layout'
  });
});
app.get('/signup', function(req,res){
  res.render('login', {
    layout:''
  });
});

// START THE SERVER
// ================
var port = process.env.PORT || 5000;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
