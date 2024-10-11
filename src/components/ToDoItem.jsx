import { useState } from 'react'
import '../styles/todoitem.css'

const ToDoItem = ({text, important}) => {

  const [completed, setCompleted] = useState(false);

  return (
    <div className={completed ? "completed" : ""}
    onClick={()=> {
      setCompleted(!completed);
    }}>
     {important ? "*" : ""} {text}
    </div>
  )
}

export default ToDoItem