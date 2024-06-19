import withAuth from "@/components/WithAuth/WithAuth";
import DashboardNav from "@/components/DashboardNav/DashboardNav";
import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <DashboardNav />
      </aside>
      <main className={styles.mainContent}>
        <h1 className={styles.dashboardHeader}>Welcome to the Dashboard</h1>
        <div className={styles.content}>
          <h2>Main Section</h2>
          {/* Add your main content here */}
        </div>
      </main>
    </div>
  );
};

export default withAuth(Dashboard);
