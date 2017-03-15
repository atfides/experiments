/* We only care about these payloads for the moments:
 * Issues: opened, edited, closed, reopened, assigned, unassigned, labeled, unlabeled, milestoned, demilestoned
 * Issue comment: Issue comment, edited, or deleted
 * Pull request: opened, closed, reopened, edited, assigned, unassigned, review requested, review request removed, labeled, unlabeled, or synchronized
 * Push: Git push to a repository (when we check if a pending task got done)
 *
 * > we monitor issues for task requests
 * > when pr gets merged check if we had that task on our db
 */

function processPayload(payload) {

  const commenterLogin = payload.comment.user.login;
  const commentText = payload.comment.body;
  const issueText = payload.issue.title;
  const issueNumber = payload.issue.number;

  console.log("commenter login: ", commenterLogin);
  console.log("commenter text: ", commentText);
  console.log("issue text: ", issueText);
  console.log("issue Number: ", issueNumber);
}

module.exports = processPayload;
