const { StatusCodes } = require("http-status-codes");
const users = require("./users");

function handleRequest(req, res) {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.writeHead(StatusCodes.OK, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to the Home Page</h1>");
  } else if (url === "/about" && method === "GET") {
    res.writeHead(StatusCodes.OK, { "Content-Type": "text/html" });
    res.end("<h1>About Us</h1>");
  } else if (url === "/users" && method === "GET") {
    res.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(StatusCodes.NOT_FOUND, { "Content-Type": "text/plain" });
    res.end("404 - Page not found");
  }
}

module.exports = {
  handleRequest
};
