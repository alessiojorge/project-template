require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`server running on port ${port}`));
