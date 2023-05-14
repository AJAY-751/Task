import React,{useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
const TodoList=()=>{
    const [todos,setTodos]=useState ([])//set an empy array
    const addTodo=(todo)=>{
        if(!todo.text || /^\s*$/.test(todo.text))
        {
            return;
        }
        const newTodos=[todo,...todos]
        setTodos(newTodos)
        //... is used to merge elements
    }
    const updatedTodo=(todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text))
        {
            return;
        }
        setTodos(prev=>prev.map(item=>item.id===todoId?newValue:item))
    }
    const removeTodo=id=>{
        const removeArr=[...todos].filter(todo=>todo.id!==id)
        setTodos(removeArr)
    }
    const completedTodo=(id)=>{
        let updatedTodo=todos.map((todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete
            }
            return todo
        }))
        setTodos(updatedTodo)
    }
    return <div>
        <h1>What's the plan for today</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completedTodo={completedTodo} removeTodo={removeTodo} completeTodo={completedTodo} updatedTodo={updatedTodo}/>
        
    </div>
}
export default TodoList