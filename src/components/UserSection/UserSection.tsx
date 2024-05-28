import { User } from "firebase/auth";
import styles from "./UserSection.module.css";
import SignOutButton from "../SignOutButton/SignOutButton";
import Image from "next/image";

interface UserSectionProps {
  user: User;
}

const UserSection: React.FC<UserSectionProps> = ({ user }) => {
  return (
    <div className={styles.userSection}>
      <Image
        src={user.photoURL || "/user-icon.svg"}
        alt={`${user.displayName || "User"}'s profile`}
        width={50}
        height={50}
        className={styles.profileImage}
      />
      <h3 className={styles.userName}>{user.displayName || "User"}</h3>
      <p className={styles.userEmail}>{user.email}</p>
      <SignOutButton />
    </div>
  );
};

export default UserSection;
