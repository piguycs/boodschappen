import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

export { auth } 

export const signup = (email:string, password:string) => {    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
}
    
export const signout = () => {
   signOut(auth)
     .then(() => {
        console.log("signed out")
     })
     .catch((error) => {
        console.log(error)
     }); 
}