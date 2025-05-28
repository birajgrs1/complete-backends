const http = require("http");
const url = require("url");

function getPostData(req) {
  return new Promise((resolve, reject) => {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      resolve(parsedBody);
    });

    req.on("error", err => {
      reject(err);
    });
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");

  const parsedUrl = url.parse(req.url, true);
  const method = req.method;

  if (parsedUrl.pathname === "/") {
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Calculator</h1>");
    res.write("<nav><ul>");
    res.write("<li><a href='/calculator'>Calculator</a></li>");
    res.write("<li><a href='/result'>Result</a></li>");
    res.write("</ul></nav>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (parsedUrl.pathname === "/calculator") {
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Calculator</h1>");
    res.write("<form method='POST' action='/result'>");
    res.write("<input type='number' name='num1' required>");
    res.write("<input type='number' name='num2' required>");
    res.write("<button type='submit'>Sum</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (parsedUrl.pathname === "/result" && method === "POST") {
    try {
      const postData = await getPostData(req);
      const params = new URLSearchParams(postData);
      const num1 = parseFloat(params.get("num1"));
      const num2 = parseFloat(params.get("num2"));
      const sum = num1 + num2;

      res.write("<html>");
      res.write("<head><title>Result</title></head>");
      res.write("<body>");
      res.write("<h1>Result</h1>");
      res.write(`<p>The sum of ${num1} and ${num2} is <strong>${sum}</strong></p>`);
      res.write("<a href='/calculator'>Try Again</a>");
      res.write("</body>");
      res.write("</html>");
      return res.end();
    } catch (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  } else {
    res.statusCode = 404;
    res.end("<h1>404: Page Not Found</h1>");
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
