import { EmailAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseAuth";
import { signout } from "../firebase/firebaseAuth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

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
    <div style={{width: "50vw", height: "50vh"}}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      <button onClick={() => signout()}>Sign Out</button>
    </div>
  );
}

export default authpage;