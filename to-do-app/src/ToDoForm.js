import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import UseInputState from "./hooks/UseInputState";
function ToDoForm(props){
    const {addTodo}=props;
    const [value,handleChange,reset]=UseInputState("");
    return(
        <Paper>
            <form onSubmit={e=>{
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
            <TextField value={value} onChange={handleChange} />
            </form> 
        </Paper>
    );
}
export default ToDoForm;