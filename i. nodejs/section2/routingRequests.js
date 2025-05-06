const http = require("http");

const server = http.createServer(function (req, res) {

    if (req.url === '/'){  // Use '===' for comparison
        res.setHeader("content-type", "text/html");  // Fixing content-type header
        res.write("<html>");
        res.write("<head><title>Home</title></head>");
        res.write("<body>");
        res.write("<h1>Hello, World!</h1>");
        res.write("<p>I am in home page.</p>");
        res.write("</body>");
        res.write("</html>");
        return res.end();

    }
    else if(req.url === '/about'){  // Use '===' for comparison
        res.setHeader("content-type", "text/html");  // Fixing content-type header
        res.write("<html>");
        res.write("<head><title>About</title></head>");
        res.write("<body>");
        res.write("<h1>Hello, World!</h1>");
        res.write("<p>I am in about page.</p>");
        res.write("</body>");
        res.write("</html>");
        return res.end();

    }
    else if(req.url === '/products'){  // Use '===' for comparison
        res.setHeader("content-type", "text/html");  // Fixing content-type header
        res.write("<html>");
        res.write("<head><title>Demo</title></head>");
        res.write("<body>");
        res.write("<h1>Hello, World!</h1>");
        res.write("<p>I am in products page.</p>");
        res.write("</body>");
        res.write("</html>");
        return res.end();

    }
    else{
        res.setHeader("content-type", "text/html");  // Fixing content-type header
        res.write("<html>");
        res.write("<head><title>Demo</title></head>");
        res.write("<body>");
        res.write("<h1>Hello, Everyone!</h1>");
        res.write("</body>");
        res.write("</html>");
        res.end();

    }

    //   res.setHeader("content-type", "html");
    //   res.write("<html>");
    //   res.write("<head><title>Demo</title></head>");
    //   res.write("<body>");
    //   res.write("<h1>Hello, World!</h1>");
    //   res.write("<p>This is demo sending response.</p>");
    //   res.write("</body>");
    //   res.write("</html>");
    //   res.end();
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port} `);
});


/*
Routing in Node.js involves determining how an application responds to client requests 
for specific endpoints (URIs) and HTTP methods (GET, POST, etc.). 
It directs incoming requests to the appropriate handler functions, which then process the 
request and send a response.

Implementing Routing:

Using the http Module (Without a Framework):
The built-in http module can be used to create a server and manually handle routing based on the 
request URL and method.
This approach requires more code to manage different routes and handle request data.

E.g:

        const http = require('http');
        const server = http.createServer((req, res) => {
          if (req.url === '/' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Home page');
          } else if (req.url === '/about' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About page');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
          }
        });
        server.listen(3000, () => {
          console.log('Server listening on port 3000');
        });

*/
