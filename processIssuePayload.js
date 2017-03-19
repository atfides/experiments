/* We only care about these payloads for the moments:
 * Issues: opened, edited, closed, reopened, assigned, unassigned, labeled, unlabeled, milestoned, demilestoned
 * Issue comment: Issue comment, edited, or deleted
 * Pull request: opened, closed, reopened, edited, assigned, unassigned, review requested, review request removed, labeled, unlabeled, or synchronized
 * Push: Git push to a repository (when we check if a pending task got done)
 *
 * > we monitor issues for task requests
 * > when pr gets merged check if we had that task on our db
 */

const parseNum = require('parse-num');

function processIssuePayload(payload) {
  const commenterLogin = payload.comment.user.login;
  const commentText = payload.comment.body;
  const issueTitle = payload.issue.title;
  const issueNumber = payload.issue.number;

  console.log("commenter login: ", commenterLogin);
  console.log("commenter text: ", commentText);
  console.log("issue text: ", issueTitle);
  console.log("issue Number: ", issueNumber, "\n\n");

  const action = payload.action;

  switch (action) {
    case "opened":
      // TODO
      // This fails in the entry of multiple numbers, ie: 40 43.5  34
      const sponsoringAmount = Math.abs( paseNum(issueTitle) );

      // cap the current donations to $70 to mitigate major screwups
      if (sponsoringAmount <= 70) {
        console.log(`>>> Wire ${sponsoringAmount} from ${commenterLogin}'s account`);
      } else {
        console.log("Waouh, that's either a high donation or we couldn't parse it. Contact support");
      }

    case "created":
      // TODO: not needed for the moment
      console.log("user submitted a new comment"); break;

    default:
      console.log("We don't need that action yet"); break;
  }

}

module.exports = processIssuePayload;
