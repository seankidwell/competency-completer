const bodyParser = require('body-parser');
const express = require('express');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
const port = 3093;

let {
  CONNECTION_STRING
} = process.env;

app.use(express.static(__dirname + "/../build"));
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log('This is every single request type!!!', req.method)
  next()
})
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use('/api/read/states', (req, res, next) => {
  console.log('Read States Request Type:', req.method);
  next();
})

app.get('/api/read/oneState', controller.readOneState);
app.get('/api/read/states', controller.readAllStatesWithCapitals);
app.get('/api/read/authors', controller.readAllAuthorsWithBooks);
app.get('/api/read/students', controller.getAllStudentsFromOneClass);
app.get('/api/read/studentGrades', controller.getStudentsAbove90);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});