import React from "react";

const Todo = ({
  todo,
  filterTodoHandler,
  deleteTodoHandler,
  setEditableTodoHandler,
  isEdit,
}) => {
  return (
    <article className="todo">
      <img
        className="profile-picture"
        src={todo.profilePicture}
        alt={todo.profilePicture}
      />
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <span>
          Created by:
          <button
            className="username-btn"
            onClick={() => filterTodoHandler(todo.username)}
          >
            {todo.username}
          </button>
        </span>
        <p>{todo.description}</p>
        <div className="actions">
          <button
            className="delete-todo"
            onClick={() => deleteTodoHandler(todo.id)}
            disabled={isEdit}
          >
            X
          </button>
          <button
            className="edit-todo"
            onClick={() => setEditableTodoHandler(todo.id)}
            disabled={isEdit}
          >
            edit
          </button>
        </div>
      </div>
    </article>
  );
};

export default Todo;
