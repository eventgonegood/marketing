var request = require('request')
    , pg = require('pg');

var cfg = {
  'api_key': process.env.SHOPIFY_API_KEY,
  'api_secret': process.env.SHOPIFY_API_SECRET
};

var db = {
  conn: 'postgres://drusellers:@localhost/insight'
};

module.exports = function (router) {

  router.get('/install',function(req, res){
    var shop = req.query.shop
        code = req.query.code;

    if(code) {

      var url = 'https://' + shop + '/admin/oauth/access_token';
      request.post({
        url: url,
        json: {'client_id':cfg.api_key, 'client_secret': cfg.api_secret, 'code': code }
      }, function(err, resp, body){
        // do something with the perma token

        var storage = {
          'shop': shop,
          'access_token': body.access_token
        };

        pg.connect(db.conn, function(err, client, done){
          client.query({
            text:'INSERT INTO customers (shop, access_token) VALUES ($1, $2)',
            values:[storage.shop, storage.access_token]
          }, function(err, result){
            console.log('err:', err);
            console.log('result:', result);

            //some kind of event

            res.send('great success');
          })
        });
      });

    } else {

      var client_id = cfg.api_key,
          scope = 'read_products,read_customers,read_orders,read_fulfillments,read_shipping',
          url = 'https://' + shop + '/admin/oauth/authorize?client_id=' + client_id + '&scope=' + scope;

      res.redirect(url);

    }
  });
};
