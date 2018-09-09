//Install express server
const express = require('express');
const path = require('path');

const app = express();

var cors = require('cors');
var bodyParser = require('body-parser');

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/frontend-test'));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname+ '/dist/frontend-test/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);