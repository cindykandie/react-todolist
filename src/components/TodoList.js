import React from 'react';
import Todo from './Todo';

export default function TodoList({
  todos, toggleTodo, deleteTodo, editLabel,
}) {
  return (
    todos.map((todo) => (
      <Todo
        key={todo.id}
        toggleTodo={toggleTodo}
        todo={todo}
        deleteTodo={deleteTodo}
        editLabel={editLabel}
      />
    ))
  );
}
