import React, { useEffect } from "react";
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
import FormHelperText from "@material-ui/core/FormHelperText";
import { ButtonGroup } from "@material-ui/core";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const schema = yup.object().shape({
  title: yup
    .string()
    .min(5, "Title is too short")
    .max(50, "Title is too long")
    .required(),
  username: yup.string().required("Username is required"),
  profilePicture: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Please enter a valid URL"
    ),
  description: yup
    .string()
    .min(5, "Description is too short")
    .max(255, "Description is too long")
    .required("Please enter a description"),
});

const TodoForm = ({
  users,
  cancelUpdateHandler,
  editableTodo,
  updateTodoHandler,
  createTodoHandler,
}: ITodoFormProps) => {
  useEffect(() => {
    editableTodo ? reset({ ...editableTodo }) : reset({ ...defaultFormState });
  }, [editableTodo, editableTodo?.id]);

  const handleResetTodoForm = () => reset({ ...defaultFormState });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormState,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleCreateOrUpdateTodo = (data: ITodo) => {
    if (editableTodo) {
      updateTodoHandler({
        ...data,
      });
    } else {
      createTodoHandler({
        ...data,
        id: Date.now(),
      });
    }

    handleResetTodoForm();
  };

  const isEdit = Boolean(editableTodo);

  return (
    <el.TodoForm onSubmit={handleSubmit(handleCreateOrUpdateTodo)}>
      <Controller
        control={control}
        name="title"
        defaultValue=""
        render={({ field }) => (
          <el.TextInput
            {...field}
            label="Title"
            color="primary"
            variant="standard"
            error={!!errors?.title}
            helperText={errors?.title?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="username"
        defaultValue=""
        render={({ field }) => (
          <el.SelectDropdown error={!!errors?.username} variant="standard">
            <InputLabel id="username-label">Username</InputLabel>
            <Select
              {...field}
              color="primary"
              labelId="username-label"
              label="username"
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
            {errors?.username && (
              <FormHelperText>{errors?.username?.message}</FormHelperText>
            )}
          </el.SelectDropdown>
        )}
      />
      <Controller
        control={control}
        name="profilePicture"
        defaultValue=""
        render={({ field }) => (
          <el.TextInput
            {...field}
            label="Image Url"
            color="primary"
            variant="standard"
            error={!!errors?.profilePicture}
            helperText={errors?.profilePicture?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="description"
        defaultValue=""
        render={({ field }) => (
          <el.TextInput
            {...field}
            label="Description"
            variant="standard"
            error={!!errors?.description}
            helperText={errors?.description?.message}
            multiline
          />
        )}
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
