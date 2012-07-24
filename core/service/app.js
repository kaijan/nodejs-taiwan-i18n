var url = require('url')
  , http = require('http')
  , i18n = require('i18n')
  , express = require('express')
  , app = express()
  // , i18nText = require('./projectCode').i18nText
  , Validator = require('./../utility/validator')
;


var Project = {
    name: 'NodeJS i18n',              //  project name
    host: '127.0.0.1',                //  nodeJS running host
    port: 3000,                       //  nodeJS running port
    static_path: './../../static/'    //  path to the static files
  };



i18n.configure({
    // setup some locales - other locales default to en silently
    // case-sensitive, lowerCase
    locales:['zh-tw','zh']
});


// ==================
// express configuration
// ==================
app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(Validator.handleRequest);


  app.use(i18n.init); // using 'accept-language' header to guess language settings

  app.set('views',Project.static_path);
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
});







app.locals({
  __i: i18n.__,
  __n: i18n.__n
});




// console.log('HelloWorld: '+ i18nText['HelloWorld']);








// app.use(i18nText);
// app.use(function(req, res, next) {
//   res.locals.i18nText = i18nText;
//   next();
// });

















// ==================
// application routers
// ==================
require('./manager/siteManager')(app);

// if no route matches, render 404 error
// MUST place this as the lastest route, and before error handler
app.all('*',
  function(req, res,next){
 
    res.result.rPage = 'error/404' ;
    next();
  },
  Validator.handleRender
);


http.createServer(app).listen(Project.port);
console.log('info', Project.name + ' on ' + Project.host + ':' + Project.port+'\n');

