import Link from "next/link";
import dashboardNavigation from "@/config/dashboardNav.json";
import styles from "./DashboardNav.module.css";
import { useAuth } from "@/contexts/AuthContext";
import UserSection from "@/components/UserSection/UserSection";

interface NavItem {
  href: string;
  label: string;
}

const DashboardNav: React.FC = () => {
  const { user } = useAuth();
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        {dashboardNavigation.map((item: NavItem) => (
          <li key={item.href} className={styles.navListItem}>
            <Link href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {user && <UserSection user={user} />} {/* Pass the user to UserSection */}
    </nav>
  );
};

export default DashboardNav;
