import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'

function App() {


  return (
    <>
     <h1 className="text-3xl font-bold underline">Learn about Redux Toolkit</h1>
     <AddTodo/>
     <Todos/>
    
    </>
  )
}

export default App
