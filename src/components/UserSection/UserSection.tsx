import { useState } from "react";
import styles from "./UserSection.module.css";
import Image from "next/image";
import UserModal from "../UserModal/UserModal";
import SignOutButton from "../SignOutButton/SignOutButton";

interface User {
  displayName?: string;
  email?: string;
  photoURL?: string;
}

interface UserSectionProps {
  user: User;
}

const UserSection: React.FC<UserSectionProps> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = (event: React.MouseEvent) => {
    if ((event.target as Element).classList.contains(styles.profileImage)) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.userSection} onClick={handleIconClick}>
        <Image
          src={user.photoURL || "/person-outline.svg"}
          alt={`${user.displayName || "User"}'s profile`}
          width={50}
          height={50}
          className={styles.profileImage}
        />
        <h3 className={styles.userName}>{user.displayName || "User"}</h3>
        <p className={styles.userEmail}>{user.email || "No email provided"}</p>
        <div className={styles.signOutButton}>
          <SignOutButton />
        </div>
      </div>
      {isModalOpen && <UserModal user={user} onClose={handleCloseModal} />}
    </>
  );
};

export default UserSection;
