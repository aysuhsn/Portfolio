import React, { useState, useEffect } from "react";
import styles from "./UserModal.module.css";

const UserModal = ({ isOpen, onClose, onUpdate, user }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setSurname(user.surname);
    }
  }, [user]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ id: user.id, name, surname });
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <h3>Edit</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <button type="submit">Remember</button>
          <button type="button" onClick={onClose}>Close it</button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;