function processPullRequestPayload(payload) {
  const merged = payload.pull_request.merged;

  // if not merged don't worry about the rest
  if (merged === false) {
    console.log(">>>> Not merged, nothing to worry about!!!");
    return;
  }

  const hasIssues = payload.repository.has_issues;

  // if no issues don't worry about the rest
  if (hasIssues === false) {
    console.log(">>>> No issues were found, none of AtFides's business!!!");
    return;
  }

  const prTitle = payload.body;

  /* Goal: match issues names (Titles)
   *
   * Two major ways to go about this;
   * 1. Either frontload all the issues with our own db // in :memory: ??
   *       + when a new issue is created (payload received), we write to db
   * 2. Or make a sync request to get all opened issues from Github then process
   * 3. Have a job queue to fully process action:
   *       + getting data from Github then continuing the job on our own
   *       + (have no idea how to implement this yet) ???
   */

  // > we're choosing 2. right now (easier) at the risk of running into a timeout

  const timeMerged = payload.merged_at;

  const mergeCommitSha = payload.merge_commit_sha;

  const repoName = payload.repo.full_name;

  // Everything,
}

function extractIssueTitles(data) {
  let titles = [];

  data.forEach( issue  => {
    titles.push(issue.title);
  });

  return titles;
}

module.exports = processPullRequestPayload;
