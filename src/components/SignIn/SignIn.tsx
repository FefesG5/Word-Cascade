import Image from "next/image";
import {
  getAuth,
  sendSignInLinkToEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../../../firebase.config";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const auth = getAuth(app);

  const sendEmailLink = () => {
    const actionCodeSettings = {
      url: "http://localhost:3000/auth/verifyEmailSignIn",
      handleCodeInApp: true,
    };

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        setMessage("A sign-in link has been sent to your email address.");
      })
      .catch((error) => {
        console.error(error);
        setMessage("An error occurred while sending the sign-in link.");
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-In result:", result);
        setMessage("Signed in with Google successfully.");
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
        setMessage("An error occurred during Google sign-in.");
      });
  };

  return (
    <div className={styles.signInContainer}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={styles.emailInputField}
      />
      <button onClick={sendEmailLink} className={styles.signInButton}>
        <Image
          src="/email-icon.png"
          alt="Email Sign-in Icon"
          width={40}
          height={40}
          className={styles.emailIcon}
        />
        <span className={styles.emailSignInText}>Sign in with Email Link</span>
      </button>
      <button onClick={signInWithGoogle} className={styles.googleSignInButton}>
        <Image
          src="/web_neutral_rd_na.svg"
          alt="Google Sign-in Logo"
          width={30}
          height={30}
          className={styles.googleIcon}
        />
        <span className={styles.googleSignInText}>Sign in with Google</span>
      </button>
      {message && <p className={styles.signInMessage}>{message}</p>}
    </div>
  );
};

export default SignIn;
