var Validator = require('./../utility/validator')
;

var SiteHandler = function(){};
module.exports = new SiteHandler() ;

SiteHandler.prototype.detectLanguage= function(req, res, next) {

  var handler = 'SiteHandler.detectLanguage';

  console.log('your language is: '+req['headers']['accept-language']);
  
  next();
};



