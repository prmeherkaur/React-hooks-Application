import React,{ useState } from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import uuid from "uuid/v4";

function ToDoApp(props){
    const initialTodos=[
        {id: 1,task:"Clean Fishtank",completed:false},
        {id: 2,task:"Wash Dishes",completed:true},
        {id: 3,task:"Complete Homework",completed:false}
    ]
    const [todos,setTodos]=useState(initialTodos);
    const addTodo=newTodoText =>{
        setTodos([...todos,{id:uuid(), task:newTodoText, completed:false}]);
    }
    const removeTodo= toDoId =>{
        const updatedTodos=todos.filter(todo =>(todo.id!==toDoId));
        setTodos(updatedTodos);
    }
    const toggleTodo= toDoId =>{
        const updatedTodos=todos.map(todo=>
            (
                (todo.id===toDoId)?{...todo,completed:!todo.completed}:todo
            ));
        setTodos(updatedTodos);
    }
    const editTodo=(toDoId,newTask)=>{
        const updatedTodos=todos.map(todo=>
            (
                (todo.id===toDoId)?{...todo,task:newTask}:todo
            ));
        setTodos(updatedTodos);
    }
    return (
        <Paper
            style={{
                padding:0,
                margin:0,
                height:"100vh",
                backgroundColor:"#fafafa"
            }}
            elevation={2}
        >
            <AppBar position="static" color="primary" style={{height:"64px"}}>
                <Toolbar>
                    <Typography color="inherit">TO-DOs</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop:"1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                <ToDoForm addTodo={addTodo}/>
                <ToDoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
                </Grid>
            </Grid>
        </Paper>
    );
}
export default ToDoApp;
