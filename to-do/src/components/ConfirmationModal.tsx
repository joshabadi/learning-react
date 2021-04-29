import React from "react";
import { ITodo } from "../types/todo.types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface IConfirmationModalProps {
  isModalOpen: boolean;
  todoID: number | null;
  closeModalHandler: () => void;
  deleteTodoHandler: (id: number | null) => void;
}

export const ConfirmationModal = ({
  isModalOpen,
  todoID,
  closeModalHandler,
  deleteTodoHandler,
}: IConfirmationModalProps) => {
  const handleDeleteTodo = (todoID: number | null) => {
    deleteTodoHandler(todoID);
    closeModalHandler();
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={closeModalHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete Todo?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete the following Todo?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModalHandler} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => handleDeleteTodo(todoID)}
          color="primary"
          autoFocus
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
