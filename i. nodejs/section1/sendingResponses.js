const http = require("http");

const server = http.createServer(function (req, res) {
  /*
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello, World!');
    res.end();
    */

  res.setHeader("content-type", "html");
  res.write("<html>");
  res.write("<head><title>Demo</title></head>");
  res.write("<body>");
  res.write("<h1>Hello, World!</h1>");
  res.write("<p>This is demo sending response.</p>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});
const port = 3001;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port} `);
});

/*
In Node.js, responses to client requests are typically sent using the res object, 
which is an instance of http.ServerResponse. 
This object provides various methods to send data back to the client, 
set headers, and manage the response lifecycle.

Different ways to send responses:

res.write(data[, encoding][, callback]): Sends a chunk of the response body. 
It can be called multiple times to stream data.


res.end([data[, encoding]][, callback]): Finishes sending the response. It can optionally send the 
last chunk of data. It must be called to signal the end of the response.

res.setHeader(name, value): Sets a single response header.

res.writeHead(statusCode[, statusMessage][, headers]): Sets the status code and headers. 
It can be used instead of res.statusCode and res.setHeader.

res.statusCode: Sets the HTTP status code.

res.status(code): A method often used in Express.js, it sets the HTTP status code and returns the res 
object for chaining.

res.send(body): A method often used in Express.js, sends the response body. 
It can handle different data types (string, object, array) and automatically sets the 
Content-Type header.

res.json(body): A method often used in Express.js, sends a JSON response. 
It sets the Content-Type header to application/json.

res.sendFile(path): A method often used in Express.js, sends a file as the response.

It's important to set the correct Content-Type header to indicate the format of the response body
(e.g., text/plain, text/html, application/json). Not calling res.end() will result in the client 
waiting indefinitely for a response.
*/
