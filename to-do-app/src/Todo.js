import React,{useState} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import UseToggleState from "./hooks/UseToggleState";
import EditTodoForm from "./EditTodoForm";
function Todo({task,completed,removeTodo,toggleTodo,editTodo,id}){
    const [isEditing,toggle]=UseToggleState(false);
    return(
        <ListItem style={{height:"64px"}}>
            {isEditing?<EditTodoForm task={task} id={id} toggle={toggle} editTodo={editTodo}/>:
            <>
            <CheckBox tabIndex={-1} checked={completed} onClick={()=>toggleTodo(id)}/>
            <ListItemText style={{textDecoration:completed?"line-through":"none"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
            <IconButton aria-label="Edit task" onClick={toggle}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete task" onClick={() => removeTodo(id)}> 
                <DeleteIcon />
            </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    );
}
export default Todo;