import React from "react";
import { ITodo } from "../types/todo.types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface IConfirmationModal {
  isModalOpen: boolean;
  todo: ITodo;
  closeModalHandler: () => void;
  deleteTodoHandler: (id: number | null) => void;
}

export const ConfirmationModal = ({
  isModalOpen,
  todo,
  closeModalHandler,
  deleteTodoHandler,
}: IConfirmationModal) => {
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
          onClick={() => deleteTodoHandler(todo.id)}
          color="primary"
          autoFocus
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
