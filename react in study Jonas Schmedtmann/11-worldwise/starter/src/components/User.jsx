import { useNavigate } from "react-router-dom";
import useFakeAuthContext from "../hooks/useFakeAuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout, isAuthenticated } = useFakeAuthContext();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    isAuthenticated && (
      <div className={styles.user}>
        <img src={user.avatar} alt={user.name} />
        <span>Welcome, {user.name}</span>
        <button onClick={handleClick}>Logout</button>
      </div>
    )
  );
}

export default User;
