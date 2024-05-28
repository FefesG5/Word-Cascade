import Link from "next/link";
import headerStyles from "../Header/Header.module.css";
import sidebarStyles from "../Sidebar/Sidebar.module.css";

interface NavItemProps {
  href: string;
  label: string;
  variant: "header" | "sidebar";
  closeSidebar?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  variant,
  closeSidebar,
}) => {
  const getClassName = () => {
    switch (variant) {
      case "header":
        return headerStyles.navItem;
      case "sidebar":
        return sidebarStyles.navItem;
    }
  };

  return (
    <li className={getClassName()} onClick={closeSidebar}>
      <Link data-testid={`nav-${label.toLowerCase()}`} href={href}>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
