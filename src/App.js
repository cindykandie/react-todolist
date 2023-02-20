import React, { useState } from 'react'
import TodoList from './components/TodoList'
function App() {
  const [todos, setTodos] = useState(['todi 1','todo 2'])
  return (
    <>
    <TodoList todos = {todos}/>
    <input type="text" />
    <button>Add todo</button>
    <button>Clear completed</button>
    <div>O left  do</div>
    </>

  );
}

export default App;
