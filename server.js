// Install express server

const express = require('express');
const path = require('path');

const app = express();

// serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/equity-frontend-task'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/equity-frontend-task/index.html'));
})

app.listen(process.env.PORT || 8080);
