import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { app } from "../../../firebase.config";

const SignOutButton = () => {
  const [message, setMessage] = useState("");
  const auth = getAuth(app);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully.");
        setMessage("Signed out successfully.");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        setMessage("An error occurred while signing out.");
      });
  };

  return (
    <div>
      <button onClick={signOutUser}>Sign Out</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignOutButton;
