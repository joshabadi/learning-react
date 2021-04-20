import React, { useState, useEffect } from "react";
import * as el from "./App.Styled";

// { title, username, profilePicture, description } = this.state,
// { users, cancelUpdateHandler } = this.props,

const defaultFormState = {
  id: undefined,
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
}) => {
  useEffect(() => {
    // TODO: Read useEffect docs
    editableTodo
      ? setFormFields({ ...editableTodo })
      : setFormFields({ ...defaultFormState });
  }, [editableTodo, editableTodo?.id]);

  const [formFields, setFormFields] = useState({ ...defaultFormState });

  const handleFormChange = (field, value) => {
    setFormFields({
      ...formFields,
      [field]: value,
    });
  };

  const handleResetTodoForm = () => setFormFields({ ...defaultFormState });

  const handleSubmit = (e) => {
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
      <input
        type="text"
        name="title"
        value={formFields.title}
        placeholder="Title"
        onChange={(e) => handleFormChange("title", e.target.value)}
      />
      <select
        name="username"
        value={formFields.username}
        onChange={(e) => handleFormChange("username", e.target.value)}
      >
        <option value="">Select user</option>
        {users.map((user) => (
          <option key={user.id} value={user.username}>
            {user.username}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="profile-picture"
        value={formFields.profilePicture}
        placeholder="Image url"
        onChange={(e) => handleFormChange("profilePicture", e.target.value)}
      />
      <textarea
        rows="5"
        placeholder="Description"
        value={formFields.description}
        onChange={(e) => handleFormChange("description", e.target.value)}
      ></textarea>
      <div className="btn-container">
        <el.PurpleButton type="submit" value={!isEdit ? "Add Todo" : "Save"} />
        {isEdit ? (
          <button type="button" onClick={() => cancelUpdateHandler()}>
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default TodoForm;
