// homeController.js

// Function to handle the vegetable route
exports.sendReqParam = (req, res) => {
    // Collect the vegetable name from query parameters
    let veg = req.query.vegetable;
    if (veg) {
        res.send(`This is the page for ${veg}`);
    } else {
        res.send('Please provide a vegetable name.');
    }
};

// Additional controller functions can be added here as needed
