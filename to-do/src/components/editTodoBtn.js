import React from 'react';

const EditTodo = props => (
    <button 
        className="edit-todo" 
        onClick={props.editTodo.bind(this, props.todoId, props.todo)}
        disabled={props.disabled}
    >
    edit
    </button>
);

export default EditTodo;