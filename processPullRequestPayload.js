function processPullRequestPayload(payload) {

  const prTitle = payload.body;
  const timeMerged = payload.merged_at;

  const mergeCommitSha = payload.merge_commit_sha;

  const repoName = payload.repo.full_name;


  // TODO: decide whether transactions only occur on master

}

module.exports = processPullRequestPayload;
