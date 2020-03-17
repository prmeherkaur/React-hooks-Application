import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import UseInputState from "./hooks/UseInputState";
function ToDoForm(props){
    const {addTodo}=props;
    const [value,handleChange,reset]=UseInputState("");
    return(
        <Paper style={{margin:"1rem 0",padding:"0 1rem"}}>
            <form onSubmit={e=>{
                e.preventDefault();
                addTodo(value);
                reset();
            }}
            >
            <TextField value={value} onChange={handleChange}
            margin='normal'
            label="Add New Task"
            fullWidth />
            </form> 
        </Paper>
    );
}
export default ToDoForm;