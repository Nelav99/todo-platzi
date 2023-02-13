import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <IconButton aria-label="delete" onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}` }>
                {props.completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon/> }
            </IconButton>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <IconButton className='Icon-delete' onClick={props.onDelete} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </li>
    );
}

export { TodoItem };