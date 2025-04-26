import React from "react";
import styles from "./UserList.module.css";

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div className={styles.list}>
      {users.map((user) => (
        <div key={user.id} className={styles.item}>
          <span>{user.name} {user.surname}</span>
          <div className={styles.btns}>
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;