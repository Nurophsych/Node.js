const fs = require("fs"),
  httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes");

module.exports = {
  getFile: (filePath, res, contentType = contentTypes.html) => {
    fs.readFile(`./${filePath}`, (error, data) => {
      if (error) {
        // Only send headers *once*
        if (!res.headersSent) {
          res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
        }
        res.end("There was an error serving content!");
      } else {
        res.writeHead(httpStatus.OK, contentType);
        res.end(data);
      }
    });
  }
};
