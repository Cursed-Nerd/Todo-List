import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("");
  function handleChange(e){
    if(e.target.value.length > 0) 
      setValue(e.target.value);
  }
  function handleSubmit(e){
    // to prevent reloading of page we use this
    e.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input 
        type='text' 
        className='todo-input' 
        value={value}
        placeholder='What is the Task today?'
        onChange={handleChange}
      />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  )
}
