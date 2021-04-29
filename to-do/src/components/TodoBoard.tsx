import React, { useState } from "react";
import { ITodo } from "../types/todo.types";
import * as el from "../styles/TodoBoard.Styled";
import Todo from "./Todo";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { ConfirmationModal } from "./ConfirmationModal";
interface ITodoBoardProps {
  todos: Array<ITodo>;
  deleteTodoHandler: () => void;
  setEditableTodoHandler: () => void;
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

  const handleFilterTodos = (username: string) => {
    setUsernameFilter(username);
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <React.Fragment key={todo.id}>
              <Todo
                todo={todo}
                setDeletableTodoHandler={setDeletableTodo}
                setEditableTodoHandler={setEditableTodoHandler}
                filterTodoHandler={handleFilterTodos}
                isEdit={isEdit}
                openModalHandler={handleOpenModal}
              />
              {index < todos.length - 1 ? (
                <Divider variant="inset" component="li" />
              ) : null}
            </React.Fragment>
          );
        })}
      <ConfirmationModal
        isModalOpen={isModalOpen}
        todoID={deletableTodo}
        closeModalHandler={handleCloseModal}
        deleteTodoHandler={deleteTodoHandler}
      />
    </el.TodoBoard>
  );
};

export default TodoBoard;
