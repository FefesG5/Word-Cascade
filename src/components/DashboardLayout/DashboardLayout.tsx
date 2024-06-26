import { ReactNode } from "react";
import DashboardNav from "@/components/DashboardNav/DashboardNav";
import styles from "./DashboardLayout.module.css";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <DashboardNav />
      </aside>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default DashboardLayout;
