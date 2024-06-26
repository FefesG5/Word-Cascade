import withAuth from "@/components/WithAuth/WithAuth";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <h1 className={styles.dashboardHeader}>Welcome to the Dashboard</h1>
      <div className={styles.content}>
        <h2>Main Section</h2>
        {/* Add your main content here */}
      </div>
    </DashboardLayout>
  );
};

export default withAuth(Dashboard);
