const express = require('express');

const app = express();

// Define a hardcoded secret key
const secretKey = 'ThisIsMySecretKey';

// Define a route handler for the home page
app.get('/', (req, res) => {
  res.send('Hello World! Your secret key is: ' + secretKey);
});


const PORT = 6060;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
