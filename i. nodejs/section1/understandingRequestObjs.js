const http = require("http");

const server = http.createServer(function(req, res) {
  console.log(req.url, req.method, req.headers);
});

const port = 3000;
server.listen(port,()=>{
    console.log(`Server running on address http://localhost:${port} `);
});






/*
The request object in Node.js represents the incoming HTTP request and provides properties and methods
for accessing request details such as headers, parameters, and body. 
It is an instance of IncomingMessage.
Key Properties:
req.method: The HTTP method used by the request (e.g., GET, POST, PUT, DELETE).
req.url: The requested URL.
req.headers: An object containing the request headers.
req.params: An object containing parameters parsed from the route path.
req.query: An object containing the query string parameters.
req.body: Contains the parsed body of the request, often used for POST and PUT requests. Middleware like express.json() or body-parser is typically used to parse the body.
req.ip: The IP address of the client.
req.hostname: The hostname of the client.
req.path: The path part of the URL.
req.protocol: The protocol used (e.g., "http" or "https").
req.secure: A boolean indicating if the connection is secure (HTTPS).
req.xhr: A boolean indicating if the request was made with an XMLHttpRequest. 
*/