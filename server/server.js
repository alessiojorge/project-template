const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//  Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  //  Allows for .env usage in local environment
  require('dotenv').config();

  //  allows for http access when developing locally
  const cors = require('cors');
  app.use(cors());
} else {
  // Set a static folder

  //const sslRedirect = require('heroku-ssl-redirect');

  //app.use(sslRedirect());
  app.use(express.static('client/build'));

  // for all routes load build index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`server running on port ${port}`));
