/* eslint-disable */
import React from 'react';
import './Todo.css';

export default function Todo({
  todo, toggleTodo, deleteTodo, editLabel,
}) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  function handleTodoDelete() {
    deleteTodo(todo.id);
  }
  function handleTextChange() {
    editLabel();
  }

  return (
    <li>
      <div>
        <input type="checkbox" checked={todo.completed} onChange={handleTodoClick} />
        <label contentEditable onChange={handleTextChange}>
          {todo.name}
        </label>
      </div>
      <div>
        <span title="edit">📝</span>
        <span title="delete" onClick={handleTodoDelete}>⛔</span>
      </div>

    </li>
  );
}
