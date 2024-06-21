import Link from "next/link";
import Image from "next/image";
import dashboardNavigation from "@/config/dashboardNav.json";
import styles from "./DashboardNav.module.css";
import { useAuth } from "@/contexts/AuthContext";
import UserSection from "@/components/UserSection/UserSection";

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

const DashboardNav: React.FC = () => {
  const { user } = useAuth();
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        {dashboardNavigation.map((item: NavItem) => (
          <li key={item.href} className={styles.navListItem}>
            <Link href={item.href} className={styles.navLink}>
              <Image
                width={24}
                height={24}
                src={item.icon}
                alt={item.label}
                className={styles.navIcon}
              />
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      {user && <UserSection user={user} />}
    </nav>
  );
};

export default DashboardNav;
