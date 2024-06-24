import styles from "./UserModal.module.css";
import SignOutButton from "../SignOutButton/SignOutButton";
import Image from "next/image";

interface User {
  displayName?: string;
  email?: string;
  photoURL?: string;
}

interface UserModalProps {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Image
          src={user.photoURL || "/person-outline.svg"}
          alt={`${user.displayName || "User"}'s profile`}
          width={50}
          height={50}
          className={styles.profileImage}
        />
        <h3 className={styles.userName}>{user.displayName || "User"}</h3>
        <p className={styles.userEmail}>{user.email || "No email provided"}</p>
        <SignOutButton />
      </div>
    </div>
  );
};

export default UserModal;
