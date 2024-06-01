import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

const SignOutButton = () => {
  const [message, setMessage] = useState("");
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("You have successfully signed out.");
      router.push("/signin");
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignOutButton;
