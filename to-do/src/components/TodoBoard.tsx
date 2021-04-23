import React, { useState } from "react";
import { ITodo } from "../types/todo.types";
import Todo from "./Todo";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
// import LoadMoreBtn from './loadMoreBtn.js'
interface ITodoBoardProps {
  todos: Array<ITodo>;
  deleteTodoHandler: () => void;
  setEditableTodoHandler: () => void;
  isEdit: boolean;
  isVisible: boolean;
}

interface ITodoBoardState {
  usernameFilter: string;
}

const TodoBoard = ({
  todos,
  deleteTodoHandler,
  setEditableTodoHandler,
  isEdit,
  isVisible,
}: ITodoBoardProps) => {
  const [usernameFilter, setUsernameFilter] = useState("");

  const handleFilterTodos = (username: string) => {
    setUsernameFilter(username);
  };

  // const loadMore = () => {
  //     const currentState = {...this.state};
  //     currentState['page'] = currentState['page'] + 1;
  //     this.setState(currentState);
  // }
  return (
    <List className="todo-board">
      {usernameFilter ? (
        <button className="back-btn" onClick={() => handleFilterTodos("")}>
          &larr;
        </button>
      ) : null}

      {todos
        .filter((todo) => {
          return todo.username.includes(usernameFilter);
        })
        .map((todo, index) => {
          return (
            <React.Fragment>
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodoHandler={deleteTodoHandler}
                setEditableTodoHandler={setEditableTodoHandler}
                filterTodoHandler={handleFilterTodos}
                isEdit={isEdit}
              />
              {index < todos.length - 1 ? (
                <Divider variant="inset" component="li" />
              ) : null}
            </React.Fragment>
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
    </List>
  );
};

export default TodoBoard;
