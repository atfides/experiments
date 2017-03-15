function processPushPayload(payload) {
  const pusherLogin = payload.sender.login;
  const pusherEmail = payload.pusher.email;

  // TODO: if same login no transactions needed

}

module.exports = processPushPayload;
