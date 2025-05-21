const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Calculator</h1>");
    res.write("<nav><ul>");
    res.write("<li><a href='/calculator'>Calculator</a></li>");
    res.write("<li><a href='/result'>Result</a></li>");
    res.write("</ul></nav>")
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/calculator") {
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Calculator</h1>");
    res.write("<form method='POST' action='/result'>");
    res.write("<input type='number' name='num1'>");
    res.write("<input type='number' name='num2'>");
    res.write("<button type='submit'>Sum</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/result" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const num1 = parseFloat(parsedBody.split("&")[0].split("=")[1]);
      const num2 = parseFloat(parsedBody.split("&")[1].split("=")[1]);
      const sum = num1 + num2;
      res.write("<html>");
      res.write("<head><title>Result</title></head>");
      res.write("<body>");
      res.write("<h1>Result</h1>");
      res.write(`<p>The sum of ${num1} and ${num2} is ${sum}</p>`);
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
}
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port} `);
});


/*
Create a Calculator
 1. Create a new Node.js project named “Calculator”.
 2. On the home page (route “/”), show a welcome message and a 
link to the calculator page.
 3. On the “/calculator” page, display a form with two input fields 
and a “Sum” button.
 4. When the user clicks the “Sum” button, they should be taken to 
the “/calculate-result” page, which shows the sum of the two 
numbers.
 ○ Make sure the request goes to the server.
 ○ Create a separate module for the addition function.
 ○ Create another module to handle incoming requests.
 ○ On the “/calculate-result” page, parse the user input, use 
the addition module to calculate the sum, and display the 
result on a new HTML page

*/