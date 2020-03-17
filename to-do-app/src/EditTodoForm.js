import React from 'react';
import TextField from "@material-ui/core/TextField";
import UseInputState from "./hooks/UseInputState";
function EditTodoform({task,id,toggle,editTodo}){
    const [value,setValue,reset]=UseInputState(task);
    return(
        <form onSubmit={ e =>{
            e.preventDefault();
            editTodo(id,value);
            reset();
            toggle();
        }}
            style={{
                marginLeft:"1rem",
                width:"50%"
            }}
        >
        <TextField 
            autoFocus
            value={value} 
            onChange={setValue}
            margin='normal'
        />
        </form>
    );
}
export default EditTodoform;