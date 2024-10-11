import { useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem'

function App() {
  return (
    <>
      <ToDoItem 
      text='Programmera' 
      important={true}
      />
    </>
  )
}

export default App
