var stream = require('stream');
var http = require('http');
var fs = require('fs');
var path = require('path');

var port = normalizePort(process.env.PORT || '9918');

var server = http.createServer(function (req, res) {
  res.writeHeader(200, {'Content-Type': 'text/plain;charset=utf-8'});
  // res.end("Hello,大熊！");
  var st = fs.createReadStream(path.dirname(__dirname) + '/README.md');
  st.pipe(res);

  console.log(res);
});

server.listen(port);

/*
* 标准化端口号，
* 保证格式为数字或者字符串，否则返回false
* */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


console.log("http server running on port " + port + " ...");
