import React,{ useState } from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/Typography";

function ToDoApp(props){
    const initialTodos=[
        {id: 1,task:"Clean Fishtank",completed:false},
        {id: 2,task:"Wash Dishes",completed:true},
        {id: 3,task:"Complete Homework",completed:false}
    ]
    const [todos,setTodos]=useState(initialTodos);
    const addTodo=newTodoText =>{
        setTodos([...todos,{id:4, task:newTodoText, completed:false}]);
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
            <ToDoForm addTodo={addTodo}/>
            <ToDoList todos={todos}/>
        </Paper>
    );
}
export default ToDoApp;
