const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname + "/views"));

app.use(express.static(path.join(__dirname, '/public')))



app.listen(8080, () => {
    console.log("Serveur démarré (http://localhost:8080/) !");
});

// GET /
app.get("/", (req, res) => {
    // res.send("Bonjour le monde...");
    res.render("index");
  });
  
  // GET /about
  app.get("/AddEmployee", (req, res) => {
    res.render("AddEmployee");
  });