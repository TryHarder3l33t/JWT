const express = require("express");
const app = express();

//utility for working with file and directory paths
const path = require("path");

//It is a  body-parser incoming JSON requests and puts the parsed data in req.body.
// Without `express.json()`, `req.body` is undefined.
app.use(express.json());

// send the index.html file if the site is requested path.join joins the dirname with index.html
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.post("/api/auth", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (error) {
    //if there is an error send it to the error middleware
    next(error);
  }
});

app.get("/api/auth", async (req, res, next) => {
  try {
    res.send(await User.byToken(req.headers.authorization));
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log(error);
  res.status(err.status || 500).send({ error: err.message });
});

modules.export = app;
