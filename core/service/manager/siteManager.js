var i18n = require("i18n")
  // , i18nText = require('./../../service/projectCode').i18nText 
  , Validator = require('./../../utility/validator')
  , SiteHandler = require('./../../handler/siteHandler')
;

module.exports = function(app){
app.get('/detectLanguage',
  SiteHandler.detectLanguage,
  function(req, res,next){


    // console.log('set to: '+ i18n.getLocale());
    

    // console.log(i18n.__('HelloWorld'));
    // console.log(i18n.__('HelloGroup', 'Node.js', 30));
    

    res.result.rPage = 'index';
    next();
  },
  Validator.handleRender
);


};