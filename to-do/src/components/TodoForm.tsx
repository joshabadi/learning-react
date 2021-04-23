import React, { useState, useEffect } from "react";
import { ITodo } from "../types/todo.types";
import { IUser } from "../types/user.types";
import * as el from "../styles/App.Styled";
// button imports
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";
// form imports
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ButtonGroup } from "@material-ui/core";

interface ITodoFormProps {
  users: Array<IUser>;
  cancelUpdateHandler: () => void;
  editableTodo: ITodo;
  updateTodoHandler: (todo: ITodo) => void;
  createTodoHandler: (todo: ITodo) => void;
}

const defaultFormState: ITodo = {
  id: null,
  title: "",
  username: "",
  profilePicture: "",
  description: "",
};

const TodoForm = ({
  users,
  cancelUpdateHandler,
  editableTodo,
  updateTodoHandler,
  createTodoHandler,
}: ITodoFormProps) => {
  useEffect(() => {
    editableTodo
      ? setFormFields({ ...editableTodo })
      : setFormFields({ ...defaultFormState });
  }, [editableTodo, editableTodo?.id]);

  const [formFields, setFormFields] = useState<ITodo>({ ...defaultFormState });

  const [isVisible, toggleIsVisible] = useState(false);

  const handleFormChange = (field: any, value: any) => {
    setFormFields({
      ...formFields,
      [field]: value,
    });
  };

  const handleResetTodoForm = () => setFormFields({ ...defaultFormState });

  const handleSubmit = (e: React.SyntheticEvent) => {
    // BONUS: Look up React Event types
    e.preventDefault();

    if (editableTodo) {
      updateTodoHandler({
        ...formFields,
      });
    } else {
      createTodoHandler({
        ...formFields,
        id: Date.now(),
      });
    }

    handleResetTodoForm();
  };

  const isEdit = Boolean(editableTodo);

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        color="primary"
        value={formFields.title}
        label="Title"
        onChange={(e) => handleFormChange("title", e.target.value)}
        variant="standard"
      />
      <FormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Username</InputLabel>
        <Select
          color="primary"
          labelId="demo-simple-select-standard-label"
          value={formFields.username}
          onChange={(e: any) => handleFormChange("username", e.target.value)}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {users.map((user: any) => (
            <MenuItem key={user.id} value={user.username}>
              {user.username}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        color="primary"
        value={formFields.profilePicture}
        label="Image Url"
        onChange={(e) => handleFormChange("profilePicture", e.target.value)}
        variant="standard"
      />
      <TextField
        label="Description"
        value={formFields.description}
        onChange={(e) => handleFormChange("description", e.target.value)}
        variant="standard"
        multiline
      />
      <div className="btn-container">
        <ButtonGroup variant="contained" size="small">
          <Button
            type="submit"
            color="primary"
            startIcon={!isEdit ? <AddIcon /> : <SaveIcon />}
          >
            {!isEdit ? "Add Todo" : "Save"}
          </Button>
          {isEdit ? (
            <Button
              color="secondary"
              onClick={() => cancelUpdateHandler()}
              endIcon={<CancelIcon />}
            >
              Cancel
            </Button>
          ) : null}
        </ButtonGroup>
      </div>
    </form>
  );
};

export default TodoForm;
