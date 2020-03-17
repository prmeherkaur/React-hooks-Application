import React,{ useState,useEffect} from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import UseTodoState from "./hooks/UseTodoState";

function ToDoApp(props){
    const initialTodos=
        JSON.parse(window.localStorage.getItem("todos")||"[]");
    const{todos,addTodo,removeTodo,toggleTodo,editTodo}=UseTodoState(initialTodos);
    useEffect(() => {
        window.localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos]);
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
