// // External Module
// const express = require('express');
// const bodyParser = require('body-parser');

import express from 'express';
import bodyParser from 'body-parser';

const app = express();



app.get("/", (req, res) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`);
})

app.get("/contact-us", (req, res) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(
    `<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>
    `);
});

app.post("/contact-us", (req, res) => {
  console.log("First handling", req.url, req.method, req.body);
})

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.send(`<h1>We will contact you shortly</h1>`);
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});