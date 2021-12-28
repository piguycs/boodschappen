import { EmailAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseAuth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import Login from "../firebase/components/Login";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID
  ],
};

function authpage() {
  console.log(auth.currentUser)
  return (
    <>
    <Login />    
    </>
  );
}

export default authpage;