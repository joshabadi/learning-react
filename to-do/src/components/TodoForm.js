import React, {Component} from 'react';
import styled from 'styled-components';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            title: '',
            username: '',
            profilePicture: '',
            description: '',
            isEdit: false,
            editableTodo: this.props.editableTodo
        }
    }

    handleFormChange = (field, value) => {
        this.setState({
            [field] : value
        });
    }

    handleResetTodoForm = () => {
        this.setState({
            id: undefined,
            title: '',
            username: '',
            profilePicture: '',
            description: '',
            isEdit: false,
            editableTodo: undefined
        });
    }

    handleCancelEdit = () => {
        this.handleResetTodoForm();
    }

    render(
        {title, username, profilePicture, description, isEdit} = this.state,
        {users} = this.props,
        PurpleButton = styled.input.attrs({ 
            type: 'submit',
            value: !isEdit ? "Add Todo" : "Save"
          })`
            background-color: rgb(89, 64, 119);
            padding: 10px 0;
            width: 300px;
            color: #f4f6f8;
            border: none;
            cursor: pointer;
            
            &:hover {
                background-color: rgb(109, 84, 140);
            }
          `
    ) {
        return (
            <form className="todo-form" onSubmit={(e) => {
                e.preventDefault();
                this.props.createTodoHandler({
                    ...this.state,
                    id: Date.now()
                });
                this.handleResetTodoForm();
            }}>
                <input 
                    type="text" 
                    name="title" 
                    value={title} 
                    placeholder="Title" 
                    onChange={(e) => this.handleFormChange('title', e.target.value)}
                />  
                <select 
                    name="username"
                    value={username} 
                    onChange={(e) => this.handleFormChange('username', e.target.value)}
                >  
                    <option value="">Select user</option>
                    {
                        users.map(( user ) => (
                            <option key={user.id} value={user.username}>{user.username}</option>
                        ))
                    }
                </select>
                <input 
                    type="text" 
                    name="profile-picture" 
                    value={profilePicture} 
                    placeholder="Image url" 
                    onChange={(e) => this.handleFormChange('profilePicture', e.target.value)} 
                />
                <textarea
                    rows="5"
                    placeholder="Description"
                    value={description} 
                    onChange={(e) => this.handleFormChange('description', e.target.value)}>
                </textarea>
                <div className="btn-container">
                    <PurpleButton />
                    {
                        isEdit ?(
                            <button type="button" onClick={() => this.handleCancelEdit()}>Cancel</button>
                        ):(
                            null
                        )
                    }
                </div>
            </form>
        )
    }
}

export default ToDoForm;