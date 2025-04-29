const http = require("http");
const router = require("./router");
const httpStatus = require("http-status-codes");
const fs = require("fs");

const port = 3000;

const express = require('express');
const path = require('path');
const app = express();  

// Set the public folder as static
app.use(express.static(path.join(__dirname, 'public')));





const customReadFile = (file_path, res) => {
  if (fs.existsSync(file_path)) {
    fs.readFile(file_path, (error, data) => {
      if (error) {
        console.log(error);
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, {
          "Content-Type": "text/html"
        });
        res.end("<h1>Internal Server Error</h1>");
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(httpStatus.NOT_FOUND, {
      "Content-Type": "text/html"
    });
    res.end("<h1>File Not Found!</h1>");
  }
};

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });
  customReadFile("views/index.html", res);
});

http.createServer(router.handle).listen(port);
console.log(`Server listening on port ${port}`);



// Your other routes and server setup
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
