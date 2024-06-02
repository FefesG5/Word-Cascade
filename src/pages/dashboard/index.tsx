// pages/dashboard/index.tsx
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SignOutButton from "@/components/SignOutButton/SignOutButton";

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>User: {user.email}</p>
      <SignOutButton/>
      {/* Add additional dashboard components */}
    </div>
  );
};

export default Dashboard;
