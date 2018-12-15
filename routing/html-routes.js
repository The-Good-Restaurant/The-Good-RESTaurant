// Dependencies
var http = require("http");

var PORT = 7500;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url
  displayPage(path, res)
}

function displayPage(url, res) {
    fs.readFile(__dirname + url, function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
}


server.listen(PORT, function () {
  console.log("Server is listening on: http://localhost:" + PORT + "/index.html");
});
