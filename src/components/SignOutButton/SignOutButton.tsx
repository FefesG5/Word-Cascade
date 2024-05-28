import { useState } from "react";

const SignOutButton = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      {/* <button onClick={signOutUser}>Sign Out</button> */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignOutButton;
