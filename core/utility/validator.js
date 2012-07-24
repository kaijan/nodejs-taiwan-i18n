var Message = require("./../service/projectCode").Message
;


var Validator = function(){};
module.exports = new Validator() ;

Validator.prototype.handleRequest = function(req, res, next) {

  var handler = "Validator.handleRequest";

  if (!res.result){
    res.result={};
    // console.log('info', "["+ req.method +"] - "+ req.url);
  }

  next();
};


Validator.prototype.handleRender = function(req, res) {

  var handler = "Validator.handleRender";

  res.render(res.result.rPage);

  console.log('info', "[RENDER] - "+ res.result.rPage +"\n");
};
