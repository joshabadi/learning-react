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
  toggleModalHandler: (arg0: boolean) => void;
  deleteTodoHandler: (id: number | null) => void;
}

export const ConfirmationModal = ({
  isModalOpen,
  todoID,
  toggleModalHandler,
  deleteTodoHandler,
}: IConfirmationModalProps) => {
  const handleDeleteTodo = (todoID: number | null) => {
    deleteTodoHandler(todoID);
    toggleModalHandler(false);
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => toggleModalHandler(false)}
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
        <Button onClick={() => toggleModalHandler(false)} color="primary">
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
