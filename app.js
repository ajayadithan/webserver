const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the shiny Webserver!');
});

app.get('/obj', (req, res) => {
    res.send({
        name: "Derek",
        age: 30
    });
  });
  

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});