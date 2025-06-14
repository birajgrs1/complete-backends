const requestHandler = require('./user');
const express = require('express');

const app = express();

app.use(express.json());

const myFirstMiddleware = (req, res, next) => {
  console.log('My first middleware');
  next(); 
};

const mySecondMiddleware = (req, res, next) => {
  if (req.path === '/submit-details') {
    console.log('My second middleware');
  }
  next();
};

app.use(myFirstMiddleware);
app.use(mySecondMiddleware);

app.use(requestHandler);

const PORT = 3001;
const localhost = 'localhost';

app.listen(PORT, localhost, () => {
  console.log(`Server running on address http://${localhost}:${PORT}`);
});
