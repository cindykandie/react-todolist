import React, { useState, useRef, useEffect } from 'react'
import TodoList from './components/TodoList'
import './App.css'

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
  function editLabel(newText){
    console.log('edit', newText)
  }
  function deleteTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)

    const novTodos = newTodos.filter(item => item !== todo)
    
    setTodos(novTodos)
    
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
    <div className='main-body'>
    <h1>todos</h1>
    <div className='user-inputfield'>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>+</button>
    </div>
    <div className='rem-todos'>{todos.filter(todo => !todo.completed).length} left  do</div>
    <TodoList todos={todos} toggleTodo ={toggleTodo} deleteTodo = {deleteTodo} editLabel = {editLabel}/>
    <button onClick={clearCompleted} className="clear-btn">Clear completed</button>
    </div>

  );
}

export default App;
