const http = require("http");

const server = http.createServer(function(req, res) {
  console.log(req);
  process.exit();    // stops event loop
});
// server.listen(3000);

const port = 3000;
server.listen(port,()=>{
    console.log(`Server running on address http://localhost:${port} `);
});
