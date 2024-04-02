const express = require('express');
const app = express();
const port = 3000;

// Import JSON data
const myData = require('./data/data.json');

// Middleware to serve static files
app.use(express.static('public'));

// Route to send JSON data
app.get('/api/data', (req, res) => {
    res.json(myData);
});


app.listen(port, () => {
  console.log(`My express app is listening at http://localhost:${port}`);
});