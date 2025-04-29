const port = 3000,
  express = require("express"),
  app = express();

// Require the homeController to link with routes
const homeController = require("./controllers/homeController");

// Middleware for parsing incoming request bodies
app.use(express.json()); // For JSON body data
app.use(express.urlencoded({ extended: true })); // For URL-encoded body data

// Serve static files from the "public" directory
app.use(express.static("public"));

// Route to handle GET requests with a query for a vegetable
app.get("/items", homeController.sendReqParam);

// POST route to collect contact information
app.post("/submit", (req, res) => {
  res.send("Contact information submitted successfully!");
});

// Middleware function to log request paths
app.use((req, res, next) => {
  console.log(`Request made to: ${req.url}`);
  next(); // Continue to the next middleware or route handler
});

// Start the server
app.listen(port, () => {
  console.log(`Express.js server running on port ${port}`);
});
