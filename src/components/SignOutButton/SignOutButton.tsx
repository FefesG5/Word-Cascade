// components/SignOutButton.tsx
import { useAuth } from "@/contexts/AuthContext";

const SignOutButton = () => {
  const { signOut } = useAuth();

  return (
    <button
      onClick={signOut}
      className="px-4 py-2 bg-red-600 text-white rounded"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
