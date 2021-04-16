import React from 'react';

const DeleteTodo = props => (
    <button 
        className="delete-todo" 
        onClick={props.deleteTodo.bind(this, props.todoId)}
        disabled={props.disabled}
    >
    X
    </button>
);

export default DeleteTodo;