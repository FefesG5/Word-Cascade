import Link from "next/link";
import dashboardNavigation from "@/config/dashboardNav.json";
import styles from "./DashboardNav.module.css";

interface NavItem {
  href: string;
  label: string;
}

const DashboardNav: React.FC = () => {
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
    </nav>
  );
};

export default DashboardNav;
