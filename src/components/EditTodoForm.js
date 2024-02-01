import React,{useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value,setValue] = useState(task.task);
  function handleChange(e){
    setValue(e.target.value);
  }
  function handleSubmit(e){
    // to prevent reloading of page we use this
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input 
        type='text' 
        className='todo-input' 
        value={value}
        onChange={handleChange}
      />
      <button type='submit' className='todo-btn'>
        Update Task
      </button>
    </form>
  )
}
