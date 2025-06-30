// import express from "express";
// import bodyParser from "body-parser";

// const app = express();

// // app.use((req, res, next) => {
// //   console.log(req.url, req.method);
// //   next();
// // });

// app.use(bodyParser.urlencoded({ extended: true }));

// // app.get("/", (req, res) => {
// //   res.send(`
// //     <h2>Welcome to AirBnB!</h2>
// //     <a href="/add-home">Go to Add Home</a>
// //   `);
// // });


// // app.get("/add-home", (req, res) => {
// //   res.send(`
// //     <h2>Add Home</h2>
// //     <form method="POST" action="/add-home">
// //       <input type="text" name="houseName" placeholder="houseName"/>
// //       <input type="text" name="address" placeholder="address"/>
// //       <input type="submit" value="Submit"/>
// //     </form>
// //   `);
// // });

// // app.post("/add-home", (req, res) => {
// //   console.log(req.body);
// //   res.send("Home added successfully!");
// // });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const hostRouter = require("./routes/hostRouter");
const userRouter = require("./routes/userRouter");

const rootDir = require("./utils/pathUtils");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(hostRouter);
app.use(userRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})



const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

