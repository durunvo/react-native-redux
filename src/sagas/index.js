

export default function* rootSaga() {
  yield [
    // Session
    // fork(Session.watchLoginFacebook),
    // fork(Session.watchLoginEmail),
    // fork(Session.watchSignUpEmail),
    // fork(Session.watchLogout),
  ];
}
