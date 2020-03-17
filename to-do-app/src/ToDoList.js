import React from 'react'
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
function ToDoList(props){
    const {todos,removeTodo,toggleTodo}=props;
    return(
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                    <Todo task={todo.task} 
                        key={todo.id} 
                        id={todo.id}
                        completed={todo.completed}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                    <Divider/>
                    </>
                ))}
            </List>
        </Paper>
    );
}
export default ToDoList;