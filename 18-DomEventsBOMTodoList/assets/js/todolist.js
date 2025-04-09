const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    let todoCounter = 1; 

    addBtn.addEventListener('click', function() {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        const li = document.createElement('li');
        li.classList.add('todo', 'pending');
        li.innerHTML = `
          <input type="checkbox" class="todo-checkbox">
          <span class="todo-text">${todoCounter}. ${todoText}</span>
          <button class="edit-btn">Redakte et</button>
        `;
        todoList.appendChild(li);
        todoInput.value = ''; 

        const checkbox = li.querySelector('.todo-checkbox');
        checkbox.addEventListener('change', function() {
          if (checkbox.checked) {
            li.classList.add('completed');
            li.classList.remove('pending');
          } else {
            li.classList.add('pending');
            li.classList.remove('completed');
          }
        });

        // Todo redaktə etmə
        const editBtn = li.querySelector('.edit-btn');
        editBtn.addEventListener('click', function() {
          const newText = prompt('Yeni metni daxil edin:', todoText);
          if (newText && newText.trim() !== '') {
            li.querySelector('.todo-text').textContent = `${todoCounter}. ${newText}`;
          }
        });

        todoCounter++; 
      }
    });

    clearBtn.addEventListener('click', function() {
      todoList.innerHTML = '';
      todoCounter = 1; 
    });