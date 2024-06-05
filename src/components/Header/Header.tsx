// Header.tsx
import { useState, useContext } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";
import NavItem from "../NavItem/NavItem";
import navigationLinks from "../../config/navigation.json";
import { ThemeContext } from "@/contexts/ThemeContext";
import { inter, poppins, roboto, cabin } from "@/app/ui/fonts";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className={`${poppins.className} ${styles.header}`}>
      {/* Logo Container */}
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/try-angle-kids-logo.png"
            alt="Try Angle Kids Logo"
            className={styles.logo}
            width={60}
            height={30}
          />
        </Link>
      </div>

      {/* Only show the hamburger icon on smaller screens */}
      <button onClick={toggleSidebar} className={styles.hamburger}>
        ☰
      </button>

      {/* Conditional rendering of the Sidebar */}
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      )}

      {/* Navigation */}
      <nav
        className={`${styles.nav} ${isSidebarOpen ? styles.navOpen : styles.nav}`}
      >
        <ul className={styles.navList}>
          {/* Navigation Items */}
          {navigationLinks.map((nav) => (
            <NavItem
              key={nav.href}
              href={nav.href}
              label={nav.label}
              variant={"header"}
              closeSidebar={closeSidebar}
            />
          ))}
        </ul>
      </nav>

      {/* Render theme changer button in header */}
      <button onClick={toggleTheme} className={styles.themeChanger}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </header>
  );
};

export default Header;
