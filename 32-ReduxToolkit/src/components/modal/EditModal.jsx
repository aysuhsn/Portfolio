import React, { useState, useEffect } from 'react'
import style from './EditModal.module.css'

const EditModal = ({ todo, onClose, onSave }) => {
  const [text, setText] = useState(todo.text)

  useEffect(() => {
    setText(todo.text)
  }, [todo])

  const handleSave = () => {
    if (text.trim()) {
      onSave({ id: todo.id, text })
      onClose()
    }
  }

  return (
    <div className={style.overLay}>
      <div className={style.modal}>
        <h3>Edit Todo</h3>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
        <div className={style.modal_btns} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}


export default EditModal
