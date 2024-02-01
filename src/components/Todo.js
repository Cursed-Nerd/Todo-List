import React from 'react'

export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
        <p
          onClick={() => toggleComplete(task.id)} 
          className={`${task.completed ? 'completed':"incompleted"}`}>
            <h2>{task.task}</h2>
        </p>
        <div>
          <button 
            className="todo-btn" 
            type='text' onClick={() => editTodo(task.id)}>
            Edit
          </button>
          <button 
            className="todo-btn" 
            type='text' onClick={() => deleteTodo(task.id)}>
            Done
          </button>
        </div>
    </div>
  )
}
