import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
function Todo({task,completed,removeTodo,toggleTodo,id}){
    
    return(
        <ListItem>
            <CheckBox tabIndex={-1} checked={completed} onClick={()=>toggleTodo(id)}/>
            <ListItemText style={{textDecoration:completed?"line-through":"none"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
            <IconButton aria-label="Edit task">
                <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete task" onClick={() => removeTodo(id)}> 
                <DeleteIcon />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
export default Todo;