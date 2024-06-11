import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Spinner from "@/components/Spinner/Spinner";
import UserSection from "@/components/UserSection/UserSection";

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || !user.email) {
      router.push("/signin");
    }
  }, [user, router]);

  if (!user || !user.email) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <UserSection user={user} />
      {/* Add additional dashboard components */}
    </div>
  );
};

export default Dashboard;
