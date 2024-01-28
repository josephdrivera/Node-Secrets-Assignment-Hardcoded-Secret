const express = require('express');

const app = express();

// Define a hardcoded secret key
const secretKey = 'mySecretKey123';

// Define a route handler for the home page
app.get('/', (req, res) => {
  res.send('Hello World! Your secret key is: ' + secretKey);
});

// Define the port to run the server on
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
