import React, { useState, useEffect } from 'react';
import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import style from './Todolist.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!inputValue.trim()) {
      toast.error("Task cannot be empty!"); 
      return;
    }
    const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        editable: false,
    };
    setTodos(item => [...item, newTodo]);
    setInputValue('');
    toast.success("Task added!");
};

const handleToggle = (id) => {
    const updated = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
    toast.info("Task status changed!");
};

  const handleDelete = (id) => {
    const todo = todos.find(t => t.id === id);
    if (!todo.completed) {
      toast.warning("Only completed tasks can be deleted!");
      return;
    }
    const updated = todos.filter(todo => todo.id !== id);
    setTodos(updated);
    toast.success("Task deleted!");
  };

  const handleEdit = (id) => {
    const todo = todos.find(t => t.id === id);
    if (todo.completed) {
      toast.warning("Completed tasks cannot be edited!");
      return;
    }
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, editable: true } : todo
    );
    setTodos(updated);
  };

  const handleEditChange = (e, id) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, text: e.target.value } : todo
    );
    setTodos(updated);
  };

  const saveEditedTask = (id) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, editable: false } : todo
    );
    setTodos(updated);
    toast.success("Changes saved!");
  };

  const handleDeleteAll = () => {
    if (todos.length === 0) {
      toast.warning("No tasks to delete!");
      return;
    }
    setTodos([]);
    toast.success("All tasks deleted!");
  };

  return (
    <div className={style.container}>
      <h1>Todo List</h1>
      <div className={style.task}>
        <input
          type="text"
          placeholder="Add a new task"
          className={style.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={style.add_btn} onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={todo.completed ? style.completed : style.incomplete}
          >
            <span className={style.index}>{index + 1}.</span>
            <input
              type="checkbox"
              className={style.checkbox}
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            {todo.editable ? (
              <input
                type="text"
                value={todo.text}
                onChange={(e) => handleEditChange(e, todo.id)}
                onBlur={() => saveEditedTask(todo.id)}
                autoFocus
              />
            ) : (
              <span
                className={style.text}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
              </span>
            )}
            <button className={style.btn1} onClick={() => handleEdit(todo.id)}>
              <MdEdit />
            </button>
            <button
              className={style.btn2}
              onClick={() => handleDelete(todo.id)}
            >
              <ImCross />
            </button>
          </li>
        ))}
      </ul>
      <button className={style.clear_btn} onClick={handleDeleteAll}>
        Clear All
      </button>
      <ToastContainer position="top-right" autoClose={500} />
    </div>
  );
};

export default TodoList;
