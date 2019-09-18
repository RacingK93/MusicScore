var express = require('express');
var app = express();
var fs = require("fs");


app.get('/index.html', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/listMusic', function (req, res) {
  fs.readFile( __dirname + "/" + "关于你的歌.txt", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
      // return data
  });
})

var server = app.listen(8083, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://localhost:"+port)

})