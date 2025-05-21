const fs = require("fs");
const http = require("http");
const path = require("path");

const user = [
  {
    name: "Biraj",
    age: 22,
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "application/json");

    // Write user data to file
    fs.writeFile(path.join(__dirname, "user.json"), JSON.stringify(user), (err) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error writing to file");
        return;
      }

      // Read the file back after writing
      fs.readFile(path.join(__dirname, "user.json"), (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end("Error reading from file");
          return;
        }

        // Send the JSON data as the response
        res.write(data);
        res.end();
      });
    });

  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});


/*
Parsing Requests:

In Node.js, parsing requests can be done using the http module's request object or the express framework.
This is an action in the default HTTP sequence, it parses arguments from an incoming request and uses them as
inputs to invoke the corresponding controller method.
i. Using the http module:::
When working directly with the http module, you can parse the request body using the req.on('data') event 
handler.
Syntax:
req.on('data', (chunk) => {
    // Process the chunk of data
});


ii. Using the express framework:::
Express provides middleware like express.json() or body-parser to parse request bodies.
syntax:
app.use(express.json());

*/
