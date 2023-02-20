import React, { useState, useRef, useEffect } from 'react'
import TodoList from './components/TodoList'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTodos(storedTodos)
  },[])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed

    setTodos(newTodos)

  }
  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === "") return
    setTodos(prevTodos =>{
      return [...prevTodos, {id: name, name: name, completed: false}]
    })
    todoNameRef.current.value = null
  }
  function clearCompleted(){
    const newTodos = todos.filter((todo => !todo.completed))
    setTodos(newTodos)
  }

  return (
    <>
    <TodoList todos={todos} toggleTodo ={toggleTodo}/>
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add todo</button>
    <button onClick={clearCompleted}>Clear completed</button>
    <div>{todos.filter(todo => !todo.completed).length} left  do</div>
    </>

  );
}

export default App;
