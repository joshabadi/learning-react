import React, { useState } from "react";
import { ITodo } from "../types/todo.types";
import * as el from "../styles/TodoBoard.Styled";
import Todo from "./Todo";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
interface ITodoBoardProps {
  todos: Array<ITodo>;
  deleteTodoHandler: () => void;
  setEditableTodoHandler: () => void;
  isEdit: boolean;
}

interface ITodoBoardState {
  usernameFilter: string;
}

const TodoBoard = ({
  todos,
  deleteTodoHandler,
  setEditableTodoHandler,
  isEdit,
}: ITodoBoardProps) => {
  const [usernameFilter, setUsernameFilter] = useState("");

  const handleFilterTodos = (username: string) => {
    setUsernameFilter(username);
  };

  return (
    <el.TodoBoard>
      {usernameFilter ? (
        <Button color="default" onClick={() => handleFilterTodos("")}>
          &larr;
        </Button>
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
        })}
    </el.TodoBoard>
  );
};

export default TodoBoard;
