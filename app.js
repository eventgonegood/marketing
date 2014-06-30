var express = require('express')
  , hbs = require('hbs')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
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




// ROUTES
// =============================
app.get('/', function(req,res){
  res.render('index', {
    layout:''
  });
});
app.get('/login', function(req,res){
  res.render('login', {
    layout:''
  });
});
app.get('/dashboard', function(req,res){
  res.render('dashboard', {
    title : 'Dashboard',
    breadcrumbs : [{name:'home',active:false,url:'a'},{name:'hi',active:true,url:'b'}]
  });
});

var mkt = express.Router();
require('./actions/marketing.js')(mkt);
app.use('/mkt', mkt);

var hs = express.Router();
require('./actions/handshake.js')(hs);
app.use('/hs', hs);

// var imp = express.Router();
// require('./actions/import_orders.js')(imp);
// app.use('/import', imp);

// START THE SERVER
// ================
var port = process.env.PORT || 5000;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
