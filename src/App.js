/* eslint-disable */
import React, { useState, useRef } from 'react';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;

    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);

    const novTodos = newTodos.filter((item) => item !== todo);

    setTodos(novTodos);
  }

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => [...prevTodos, { id: name, name, completed: false }]);
    todoNameRef.current.value = null;
  }
  function clearCompleted() {
    const newTodos = todos.filter(((todo) => !todo.completed));
    setTodos(newTodos);
  }

  return (
    <div className="main-body">
      <NavBar />
      <h1>todos</h1>
      <div className="user-inputfield">
        <input ref={todoNameRef} type="text" />
        <button type="submit" onClick={handleAddTodo}>+</button>
      </div>
      <div className="rem-todos">
        {todos.filter((todo) => !todo.completed).length}
        {' '}
        left  do
      </div>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <button
        type="submit"
        onClick={clearCompleted}
        className="clear-btn"
      >
        Clear completed
      </button>
    </div>

  );
}

export default App;
