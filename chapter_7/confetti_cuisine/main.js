const http = require("http"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

const port = 3000;
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


router.get("/", (req, res) => {
  utils.getFile("views/index.html", res, contentTypes.html);
});

router.get("/courses.html", (req, res) => {
  utils.getFile("views/courses.html", res, contentTypes.html);
});

router.get("/contact.html", (req, res) => {
  utils.getFile("views/contact.html", res, contentTypes.html);
});

router.get("/confetti_cuisine.css", (req, res) => {
  utils.getFile("public/css/confetti_cuisine.css", res, contentTypes.css);
});

router.get("/graph.png", (req, res) => {
  utils.getFile("public/images/graph.png", res, contentTypes.png);
});

router.get("/people.jpg", (req, res) => {
  utils.getFile("public/images/people.jpg", res, contentTypes.jpg);
});




http.createServer(router.handle).listen(port);
console.log(`Server running at http://localhost:${port}`);
console.log(`Press Ctrl + C to stop the server`);
