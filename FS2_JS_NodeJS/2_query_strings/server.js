var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
  var {txt} = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
    var now = new Date()
//  var txt = q.year + " " + q.month;
    var infor;
    if(txt==undefined){
        infor="no query string data"
    }
    else {
        infor= "Time : " + now + " URL requested : localhost:88" + req.url + "  The names and values of string data : txt : "+ txt
    }
  res.end(infor);
}).listen(88);