var express = require("express");
var app = express();
var useragent = require("useragent");
//var reqIP = require("request-ip");

app.get('/',function(req, res) {
    var agent = useragent.parse(req.headers['user-agent']);
    var clientIP = req.headers["x-forwarded-for"];
    console.log(clientIP);
  if (clientIP){
    var list = clientIP.split(",");
    clientIP = list[list.length-1];
  } else {
    clientIP = req.connection.remoteAddress;
  }
  
  res.json({
      ip: clientIP,
      language: req.headers['accept-language'],
      OS: agent.os.family
  });
});

app.listen(8080,function(){
    console.log("app running.....");
})