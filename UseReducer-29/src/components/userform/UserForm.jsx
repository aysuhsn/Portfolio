import React, { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname) return;
    onAdd({ id: Date.now(), name, surname });
    setName("");
    setSurname("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default UserForm;