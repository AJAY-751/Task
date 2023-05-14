import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const [input,setInput]=useState(props.edit?props.edit.value:'')
    const inputRef = useRef(null)
    useEffect(()=>{
      inputRef.current.focus()
    })
    const handleChange =e=>{
        setInput( e.target.value )//store what ever we type on input to input
     }
  const handleSubmit = e => {
    e.preventDefault()//prevent refresh on clicking
    props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input
       
    })
    setInput('')//delete the value on input on clicking button
  }
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  )
}

export default TodoForm