// Sidebar.tsx
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import navigationLinks from "../../config/navigation.json";
import NavItem from "../NavItem/NavItem";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, closeSidebar]);

  return (
    <aside
      ref={sidebarRef}
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
    >
      {/* ... sidebar contents ... */}
      <ul className={styles.navList}>
        {/* Navigation Items */}
        {navigationLinks.map((nav) => (
          <NavItem
            key={nav.href}
            href={nav.href}
            label={nav.label}
            variant={"sidebar"}
            closeSidebar={closeSidebar}
          />
        ))}
      </ul>

      {/* Add the theme changer button in the sidebar */}
      <button onClick={toggleTheme} className={styles.themeChanger}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </aside>
  );
};

export default Sidebar;
