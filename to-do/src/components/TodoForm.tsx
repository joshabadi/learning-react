import React, { useState, useEffect } from "react";
import { ITodo } from "../types/todo.types";
import { IUser } from "../types/user.types";
import * as el from "../styles/TodoForm.Styled";
// button imports
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";
// form imports
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
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
    <el.TodoForm onSubmit={handleSubmit}>
      <el.TextInput
        color="primary"
        value={formFields.title}
        label="Title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFormChange("title", e.target.value)
        }
        variant="standard"
      />
      <el.SelectDropdown variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Username</InputLabel>
        <Select
          color="primary"
          labelId="demo-simple-select-standard-label"
          value={formFields.username}
          onChange={(e) => handleFormChange("username", e.target.value)}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {users.map((user: IUser) => (
            <MenuItem key={user.id} value={user.username}>
              {user.username}
            </MenuItem>
          ))}
        </Select>
      </el.SelectDropdown>
      <el.TextInput
        color="primary"
        value={formFields.profilePicture}
        label="Image Url"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFormChange("profilePicture", e.target.value)
        }
        variant="standard"
      />
      <el.TextInput
        label="Description"
        value={formFields.description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFormChange("description", e.target.value)
        }
        variant="standard"
        multiline
      />
      <el.BtnContainer>
        <ButtonGroup variant="contained" size="small">
          <Button
            type="submit"
            color="primary"
            startIcon={!isEdit ? <AddIcon /> : <SaveIcon />}
          >
            {!isEdit ? "Add Todo" : "Save"}
          </Button>
          <Button
            color="secondary"
            onClick={() => cancelUpdateHandler()}
            endIcon={<CancelIcon />}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </el.BtnContainer>
    </el.TodoForm>
  );
};

export default TodoForm;
