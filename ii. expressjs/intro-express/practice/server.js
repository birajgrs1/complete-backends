const express = require('express');
const app = express();

const PORT = 3001;
const localhost = 'localhost';

app.use((req, res, next) => {
  console.log(`Request path: ${req.path}`);
  next();
});

app.use((req, res, next) => {
  console.log(`Request method: ${req.method}`);
  next();
});

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/contact-us', (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <form method="POST" action="/contact-us">
      <label>
        Name: <input type="text" name="name" required/>
      </label><br/><br/>
      <label>
        Email: <input type="email" name="email" required/>
      </label><br/><br/>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/contact-us', (req, res) => {
  const { name, email } = req.body;
  res.send(`<h1>Thank you for contacting us, ${name}!</h1><p>We will reach out to you at ${email} soon.</p>`);
});

app.use((req, res) => {
  res.status(404).send('404 - Page Not Found!');
});

app.listen(PORT, localhost, () => {
  console.log(`Server running on address http://${localhost}:${PORT}`);
});


/*
1. Install express and setup project 
2. Add two dummy middleware that logs requests path andrequest method respectively
3. Add third middleware that returns a response
4. Now, add handeling using two more middleware that handle path /, a request to 
/contact-us page.
5. contact-us should return form with name and email fields that submits to /contact-us
page also 
6. Also handle post incoming request to /contact-us page using a separate middleware 

*/