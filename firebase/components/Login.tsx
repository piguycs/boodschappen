import { useState } from 'react';
import loginStyles from '../../styles/Login.module.css'
import { signout, signup, signin } from "../firebaseAuth";

export default function() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  return (
    <div className={loginStyles.authcontainer}>
      <h1 className={loginStyles.title}>Sign In with Email</h1>
      <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
      <div className={loginStyles.buttons}>
        <button>Sign Up</button>
        <button onClick={() => signin(email, password)}>Sign In</button>
      </div>
      <a href="/">forgot password?</a>
    </div>
  )
} 