import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../firebase.config";
import SignIn from "@/components/SignIn/SignIn";
import UserSection from "@/components/UserSection/UserSection";

const Access: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);
  return <>{user ? <UserSection user={user} /> : <SignIn />}</>;
};

export default Access;
