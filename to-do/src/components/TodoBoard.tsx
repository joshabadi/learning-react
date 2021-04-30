import React, { useState } from "react";
import { ITodo } from "../types/todo.types";
import * as el from "../styles/TodoBoard.Styled";
import Todo from "./Todo";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { ConfirmationModal } from "./ConfirmationModal";
interface ITodoBoardProps {
  todos: Array<ITodo>;
  deleteTodoHandler: (id: number | null) => void;
  setEditableTodoHandler: (id: number | null) => void;
  isEdit: boolean;
}

const TodoBoard = ({
  todos,
  deleteTodoHandler,
  setEditableTodoHandler,
  isEdit,
}: ITodoBoardProps) => {
  const [usernameFilter, setUsernameFilter] = useState<string>("");
  const [deletableTodo, setDeletableTodo] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const pageLength = 10;
  const maxTodos = pageLength * currentPage;

  const filteredTodosByUser = todos.filter((todo) => {
    return todo.username.includes(usernameFilter);
  });
  const todoCount = filteredTodosByUser.length;

  const handleFilterTodos = (username: string) => {
    setUsernameFilter(username);
  };

  return (
    <el.TodoBoard>
      {usernameFilter ? (
        <Button onClick={() => handleFilterTodos("")}>&larr;</Button>
      ) : null}

      {filteredTodosByUser
        .filter((todo, index) => index < maxTodos)
        .map((todo, index) => {
          return (
            <React.Fragment key={todo.id}>
              <Todo
                todo={todo}
                setDeletableTodoHandler={setDeletableTodo}
                setEditableTodoHandler={setEditableTodoHandler}
                filterTodoHandler={handleFilterTodos}
                isEdit={isEdit}
                toggleModalHandler={setIsModalOpen}
              />
              {index < maxTodos - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </React.Fragment>
          );
        })}

      {maxTodos < todoCount ? (
        <el.ButtonContainer>
          <Button onClick={() => setCurrentPage(currentPage + 1)}>
            Load more
          </Button>
        </el.ButtonContainer>
      ) : null}

      <ConfirmationModal
        isModalOpen={isModalOpen}
        todoID={deletableTodo}
        toggleModalHandler={setIsModalOpen}
        deleteTodoHandler={deleteTodoHandler}
      />
    </el.TodoBoard>
  );
};

export default TodoBoard;
