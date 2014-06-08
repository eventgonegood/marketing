module.exports = function (shop) {
  //look for dupe skus
  //based only on our current product cache

  /*
    SELECT data->'sku', COUNT(*) as count
    FROM products
    GROUP BY data->'sku'
    WHERE shop = 'v23athletics.myshopify.com'
      AND count > 1
  */

}
