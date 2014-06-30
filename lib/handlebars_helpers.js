var gravatar = require('gravatar');

module.exports = function (hbs) {
  console.log('hbs');

  hbs.registerHelper('json', function(context) {
    return JSON.stringify(context);
  });

  hbs.registerHelper('gravatar',function(context){
    return gravatar.url(context, {});
  });

}
