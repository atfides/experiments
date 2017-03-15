const bodyParser = require('body-parser');
const express = require('express');

const processPayload = require('./processPayload');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route("/ping/github/:user/:repo").post( (req, res) => {

  // simple design we monitor issues for task requests
  // when pr gets merged check if we had any task on our db
  const payload = JSON.parse(req.body.payload);

  // process the freaking payload
  processPayload( payload );

  res.end("That's all folks!!!!");
});

let PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Listening on port: ${ PORT }...`);
