// console.log("Hello, world!");

// const fs = require('fs');

// fs.writeFile("demo.txt","Writing File", (err) =>{
//     if (err) console.log("Error Occurred!");
//     else console.log("File Written Successfully!");
// });

// const http = require("http");
// function requestListener(req, res) {
//   console.log(req);
// }
// http.createServer(requestListener);

const http = require("http");

const server = http.createServer(function(req, res) {
  console.log(req);
});
// server.listen(3000);

const port = 3000;
server.listen(port,()=>{
    console.log(`Server running on address http://localhost:${port} `);
});
