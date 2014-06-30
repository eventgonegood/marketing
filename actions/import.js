var shopify = require('../lib/shopify.js');

module.exports = function (router) {

  // /import/v23athletics.myshopify.com/orders
  router.post('/orders', function(req, resp){
    var shop = req.query.shop;

    //go get all orders - by paging

  });

  // /import/v23athletics.myshopify.com/items
  router.post('/items', function(req, resp){
    var shop = req.query.shop;


  });

};
