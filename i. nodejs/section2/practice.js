const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>E-Commerce</title></head>");
  res.write("<body>");
  res.write(`
    <nav style="margin-bottom: 20px;">
      <a href="/" style="margin-right: 10px;">Home</a>
      <a href="/men" style="margin-right: 10px;">Men</a>
      <a href="/women" style="margin-right: 10px;">Women</a>
      <a href="/kids" style="margin-right: 10px;">Kids</a>
      <a href="/cart" style="margin-right: 10px;">Cart</a>
    </nav>
  `);

  if (req.url === "/") {
    res.write("<div><h4>Welcome to Home Page.</h4></div>");
  } else if (req.url === "/men") {
    res.write("<div><h4>Welcome to Men Section.</h4></div>");
  } else if (req.url === "/women") {
    res.write("<div><h4>Welcome to Women Section.</h4></div>");
  } else if (req.url === "/kids") {
    res.write("<div><h4>Welcome to Kids Section.</h4></div>");
  } else if (req.url === "/cart") {
    res.write("<div><h4>Welcome to Cart Page.</h4></div>");
  } else {
    res.statusCode = 404;
    res.write("<div><h4>404 - Page Not Found</h4></div>");
  }

  res.write("</body>");
  res.write("</html>");
  return res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
Create a page that shows a navigation bar of 
E-commerce with the following links:
 A. Home
 B. Men
 C. Women
 D. Kids
 E. Cart
 Clicking on each link page should navigate to that 
page and a welcome to section text is shown 
there
*/
