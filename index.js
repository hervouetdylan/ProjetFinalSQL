const express = require("express");
const path = require("path");
const app = express()

const port = 3000

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
  app.get("/about", (req, res) => {
    res.render("about");
  });
<<<<<<< HEAD
  
  // GET /data
  app.get("/data", (req, res) => {
    const test = {
      titre: "Test",
      items: ["un", "deux", "trois"]
    };
    res.render("data", { model: test });
  });
=======
>>>>>>> 410ec8c8d959406a50d245754b26dd73939c96e5
