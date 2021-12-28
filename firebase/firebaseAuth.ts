import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const auth = getAuth();

export { auth };

export const signup = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      return 1
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return errorCode
    });
};

export const signin = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
        const user = userCredential.user
        console.log(user)
        return 1
    }
  ).catch((error) => {
      console.log(error.code, error.message)
      return error.code
  })
};

export const signout = () => {
  signOut(auth)
    .then(() => {
      console.log("signed out");
      return 1
    })
    .catch((error) => {
      console.log(error);
      return error.code
    });
};
