import { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodoProp }) {
  // state
  let [todoInput, setTodoInput] = useState('');

  // methods
  function addTodo() {
    if (todoInput.length > 0) {
      addTodoProp(todoInput);
      setTodoInput('');
    }
  }

  // component return
  return (
    <div id="todoForm">
      <form onSubmit={(e) => e.preventDefault()}>
        <label id="todoLabel">ToDo</label>
        <br />
        <input
          type="text"
          className="inputTxt"
          placeholder="what needs to be done?"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button id="addButton" onClick={addTodo}>
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
