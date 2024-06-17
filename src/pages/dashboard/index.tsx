import withAuth from "@/components/WithAuth/WithAuth";
import UserSection from "@/components/UserSection/UserSection";
import DashboardNav from "@/components/DashboardNav/DashboardNav";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  return (
    <div>
      <DashboardNav />
      <h1>Welcome to the Dashboard</h1>
      {user && <UserSection user={user} />} {/* Pass the user to UserSection */}
    </div>
  );
};

export default withAuth(Dashboard);
