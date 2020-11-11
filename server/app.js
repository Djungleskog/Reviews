const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname,'../client/dist')));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reviews'
});

connection.connect((err) => {
  if (err) {
      console.log('Not connected to database');
      throw err;
  } else {
      console.log('Connected to database');
  }
});

app.get('/api/reviews', (req, res) => {
  console.log('in GET')
  var queryString = 'SELECT * FROM reviews';
  connection.query(queryString, (err,data) => {
    if(err){
      console.log("Couldn't Retrieve Reviews Data from DB!");
    } else {
      res.statusCode = 200;
      res.json(data);
      console.log("gotem");

    }
  })
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});