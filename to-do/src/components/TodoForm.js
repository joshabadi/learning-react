import React, { Component } from "react";
import styled from "styled-components";

const defaultFormState = {
  id: undefined,
  title: "",
  username: "",
  profilePicture: "",
  description: "",
};

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultFormState,
    };
  }

  componentDidUpdate(prevProps) {
    // LOOKUP: optional chaining
    if (this.props?.editableTodo?.id !== prevProps?.editableTodo?.id) {
      if (this.props.editableTodo) {
        this.setState({ ...this.props.editableTodo });
      } else {
        this.setState({ ...defaultFormState });
      }
    }
  }

  handleFormChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  handleResetTodoForm = () => {
    this.setState({
      ...defaultFormState,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.editableTodo) {
      this.props.updateTodoHandler({
        ...this.state,
      });
    } else {
      this.props.createTodoHandler({
        ...this.state,
        id: Date.now(),
      });
    }
    //async
    this.handleResetTodoForm();
  };

  render(
    { title, username, profilePicture, description } = this.state,
    { users, cancelUpdateHandler } = this.props,
    PurpleButton = styled.input`
      background-color: rgb(89, 64, 119);
      padding: 10px 0;
      width: 300px;
      color: #f4f6f8;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(109, 84, 140);
      }
    `,
    isEdit = Boolean(this.props.editableTodo)
  ) {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => this.handleFormChange("title", e.target.value)}
        />
        <select
          name="username"
          value={username}
          onChange={(e) => this.handleFormChange("username", e.target.value)}
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
          value={profilePicture}
          placeholder="Image url"
          onChange={(e) =>
            this.handleFormChange("profilePicture", e.target.value)
          }
        />
        <textarea
          rows="5"
          placeholder="Description"
          value={description}
          onChange={(e) => this.handleFormChange("description", e.target.value)}
        ></textarea>
        <div className="btn-container">
          <PurpleButton type="submit" value={!isEdit ? "Add Todo" : "Save"} />
          {isEdit ? (
            <button type="button" onClick={() => cancelUpdateHandler()}>
              Cancel
            </button>
          ) : null}
        </div>
      </form>
    );
  }
}

export default ToDoForm;
