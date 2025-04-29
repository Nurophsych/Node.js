const port = 3000,
  express = require("express"),
  app = express(); // Create the Express app

// Serve static files from the "public" directory
app.use(express.static("public"));
    
// Handle a GET request to "/"
app.get("/", (req, res) => {

    console.log(req.params); // URL parameters
    console.log(req.body);   // POST body
    console.log(req.url);    // Requested URL
    console.log(req.query);  // Query strings like ?name=jon
    console.log(req.method); // HTTP method (GET, POST, etc.)
    console.log(req.headers); // Request headers   
    res.send("Hello, Universe!");
})




// Start the server
.listen(port, () => {
  console.log(`Express.js server listening on port ${port}`);
  
});
