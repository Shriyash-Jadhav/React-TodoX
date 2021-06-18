import React from 'react';
import "./App.css";
const Todo = (props) => {
    return (
        <div className="todo-lists" >
            <h1 className="todo-list-h1">{props.value}</h1>
            <button type="button" class="btn btn-outline-danger"
                style={{width:"100px", height:"40px", marginTop:"5px"}}
              onClick={() => {
                    props.onSelect(props.id)
            }}>
            Delete</button>
        </div>
    );
};

export default Todo
