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

app.use(bodyParser.json());
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get('/api/read/states', controller.readAllStatesWithCapitals);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});