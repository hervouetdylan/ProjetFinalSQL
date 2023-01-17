const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname + "/views"));



app.listen(3000, () => {
    console.log("Serveur démarré (http://localhost:3000/) !");
});

// GET /
app.get("/", (req, res) => {
    // res.send("Bonjour le monde...");
    res.render("index");
  });
  
  // GET /about
  app.get("/about", (req, res) => {
    res.render("about");
  });
