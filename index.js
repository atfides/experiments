const bodyParser = require('body-parser');
const express = require('express');

const processIssuePayload = require('./processIssuePayload');
const processPushPayload = require('./processPushPayload');
const processPullRequestPayload = require('./processPullRequestPayload');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route("/ping/github/:user/:repo").post( (req, res) => {

  const typeofPayload = req.headers["x-github-event"];
  const payload = JSON.parse(req.body.payload);

  switch (typeofPayload) {
    case "issues":
      processIssuePayload(payload); break;

    case "issue_comment":
      // TODO:  write a specific func for issue_comment
      processIssuePayload(payload); break;

    case "pull_request":
      processPullRequestPayload(payload); break;

    case "push":
      processPushPayload(payload); break;

    default:
      throw new Error("Sorry we only accept issues, prs and push");
  }

  res.end("That's all folks!!!!");
});

let PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Listening on port: ${ PORT }...`);
