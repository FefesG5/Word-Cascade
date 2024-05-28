import Image from "next/image";
import { useState } from "react";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.signInContainer}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={styles.emailInputField}
      />
      {/* <button onClick={sendEmailLink} className={styles.signInButton}>
        <Image
          src="/email-icon.png"
          alt="Email Sign-in Icon"
          width={40}
          height={40}
          className={styles.emailIcon}
        />
        <span className={styles.emailSignInText}>Sign in with Email Link</span>
      </button> */}
      {message && <p className={styles.signInMessage}>{message}</p>}
    </div>
  );
};

export default SignIn;
