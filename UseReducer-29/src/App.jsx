import React, { useReducer, useState } from "react";
import './App.css'
import { userReducer, initialState } from "./reducer/UserReducer";
import UserForm from "./components/userform/UserForm";
import UserList from "./components/userlist/UserList";
import UserModal from "./components/usermodal/UserModal";

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [modalUser, setModalUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAdd = ({ id, name, surname }) => {
    dispatch({ type: "CREATE", id, name, surname });
  };

  const handleUpdate = ({ id, name, surname }) => {
    dispatch({ type: "UPDATE", id, name, surname });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="container">
      <h1>Users</h1>
      <UserForm onAdd={handleAdd} />
      <UserList
        users={state}
        onDelete={handleDelete}
        onEdit={(user) => {
          setModalUser(user);
          setModalOpen(true);
        }}
      />
      <button onClick={handleReset} className="reset">Reset</button>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onUpdate={handleUpdate}
        user={modalUser}
      />
    </div>
  );
}

export default App;
