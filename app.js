var express = require('express')
  , hbs = require('hbs')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override');

// Express Configuration
// =====================

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));


//handlebars helpers
hbs.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

// ROUTES
// =============================
app.get('/', function(req,res){
  res.render('index', {

  });
});


var mkt = express.Router();
require('./actions/marketing.js')(mkt);
app.use('/mkt', mkt);

var hs = express.Router();
require('./actions/handshake.js')(hs);
app.use('/hs', hs);


// START THE SERVER
// ================
var port = process.env.PORT || 5000;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
