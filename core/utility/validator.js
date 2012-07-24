var Message = require("./../service/projectCode").Message
;


var Validator = function(){};
module.exports = new Validator() ;

Validator.prototype.handleRequest = function(req, res, next) {

  var handler = "Validator.handleRequest";

  if (!res.result){
    res.result={};
  }

  next();
};


Validator.prototype.handleRender = function(req, res) {

  var handler = "Validator.handleRender";

  console.log('\n');

  res.render(res.result.rPage);
};
