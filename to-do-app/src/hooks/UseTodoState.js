import React, { useState } from 'react';
import uuid from "uuid/v4";
export default (initialTodos) =>{
    const [todos,setTodos]=useState(initialTodos);
    return {
        todos:todos,
        addTodo:newTodoText =>{
            setTodos([...todos,{id:uuid(), task:newTodoText, completed:false}]);
        },
        removeTodo:toDoId =>{
            const updatedTodos=todos.filter(todo =>(todo.id!==toDoId));
            setTodos(updatedTodos);
        },
        toggleTodo:toDoId =>{
            const updatedTodos=todos.map(todo=>
                (
                    (todo.id===toDoId)?{...todo,completed:!todo.completed}:todo
                ));
            setTodos(updatedTodos);
        },
        editTodo:(toDoId,newTask)=>{
            const updatedTodos=todos.map(todo=>
                (
                    (todo.id===toDoId)?{...todo,task:newTask}:todo
                ));
            setTodos(updatedTodos);
        }
    };
}

