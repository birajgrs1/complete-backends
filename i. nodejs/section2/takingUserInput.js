const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>User Form</title></head>");
    res.write("<body>");
    res.write("<h1>User Form</h1>");
    res.write("<form method='POST' action='/submit-datas'>");
    res.write("<label for='name'>Name: </label>");
    res.write(
      "<input type='text' name='name' placeholder='Enter your name' required><br/><br/>"
    );

    res.write("<label>Gender: </label><br/>");
    res.write("<input type='radio' name='gender' value='male' id='male'>");
    res.write("<label for='male'>Male</label><br/>");
    res.write("<input type='radio' name='gender' value='female' id='female'>");
    res.write("<label for='female'>Female</label><br/><br/>");

    res.write("<label for='email'>Email: </label>");
    res.write(
      "<input type='email' name='email' placeholder='Enter your email' required><br/><br/>"
    );

    res.write("<label for='password'>Password: </label>");
    res.write(
      "<input type='password' name='password' placeholder='Enter your password' required><br/><br/>"
    );

    res.write("<input type='submit' value='Submit'>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  // redirecting request using http
  else if (req.url.toLowerCase() === "/submit-datas" && req.method == "POST") {
    fs.writeFileSync("data.txt", "biraj");
    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
In Node.js, redirecting requests can be achieved using the http module for low-level control or the 
express framework for a more streamlined approach.

i. Using the http module:::
When working directly with the http module, a redirect is handled by setting the Location header in 
the response and specifying a 3xx status code.

ii. Using the express framework:::
Express simplifies redirection with the res.redirect() method.

*/
