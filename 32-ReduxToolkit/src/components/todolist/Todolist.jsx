import React, { useState } from 'react'
import style from './Todolist.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  addTodo,
  deleteTodo,
  clearTodos,
  updateTodo,
} from '../../redux/features/todoSlice.js'
import EditModal from '../modal/EditModal'

const Todolist = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [input, setInput] = useState('')
  const [selectedTodo, setSelectedTodo] = useState(null)

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input))
      setInput('') 
    }
  }

  const handleUpdate = (todo) => {
    setSelectedTodo(todo)
  }

  const handleSave = (updatedTodo) => {
    dispatch(updateTodo(updatedTodo))
  }

  return (
    <div className={style.main}>
      <h2>Todo List</h2>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new todo..."
          style={{
            flex: 1,
            fontSize:'1rem',
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <button className={style.add_btn} onClick={handleAdd}>Add</button>
      </div>

      <ul className={style.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={style.list_item}>
            {todo.text}
            <div className={style.list_btns}>
            <button className={style.del_btn} onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
            <button className={style.edit_btn} onClick={() => handleUpdate(todo)}>
              Edit
            </button>
            </div>
          </li>
        ))}
      </ul>

        <button className={style.all_btn} onClick={() => dispatch(clearTodos())}>Delete All</button>

      {selectedTodo && (
        <EditModal
          todo={selectedTodo}
          onClose={() => setSelectedTodo(null)}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

export default Todolist
