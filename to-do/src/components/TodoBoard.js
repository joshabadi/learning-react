import React, { useState } from "react";
import Todo from "./Todo.js";
// import LoadMoreBtn from './loadMoreBtn.js'

const TodoBoard = ({
  todos,
  deleteTodoHandler,
  setEditableTodoHandler,
  isEdit,
}) => {
  const [usernameFilter, setUsernameFilter] = useState("");

  const handleFilterTodos = (username) => {
    setUsernameFilter(username);
  };

  // const loadMore = () => {
  //     const currentState = {...this.state};
  //     currentState['page'] = currentState['page'] + 1;
  //     this.setState(currentState);
  // }

  return (
    <section className="todo-board">
      {usernameFilter ? (
        <button className="back-btn" onClick={() => handleFilterTodos("")}>
          &larr;
        </button>
      ) : null}

      {todos
        .filter((todo) => {
          return todo.username.includes(usernameFilter);
        })
        .map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodoHandler={deleteTodoHandler}
              setEditableTodoHandler={setEditableTodoHandler}
              filterTodoHandler={handleFilterTodos}
              isEdit={isEdit}
            />
          );
          {
            /* if ( index <= maxTodosPerPage ) {
                        return(
                            <Todo
                                key = {todo.id}
                                todo = {todo}
                                todoId = {index}
                                deleteTodo = {this.props.deleteTodo}
                                editTodo = {this.props.editTodo}
                                filterTodos = {this.filterTodos}
                                isEdit = {this.props.isEdit}
                            />
                        )
                    } else {
                        return ( null );
                    } */
          }
        })}

      {/* {maxTodosPerPage < todos.length ? (
                    <LoadMoreBtn action={this.loadMore} />
                ):(
                    null
                )} */}
    </section>
  );
};

export default TodoBoard;
