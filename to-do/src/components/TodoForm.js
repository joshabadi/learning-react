import React, {Component} from 'react';

class ToDoForm extends Component {
    render() {
        const {title, username, profilePicture, description, isEdit} = this.props.formData,
              {users} = this.props;
        return (
            <form className="to-do-form" onSubmit={this.props.createOrUpdate.bind(this, !isEdit ? 'create' : 'update')}>
                <input 
                    type="text" 
                    name="title" 
                    value={title} 
                    placeholder="Title" 
                    onChange={this.props.handleChange.bind(this, 'title')}
                />  
                <select 
                    name="username"
                    value={username} 
                    onChange={this.props.handleChange.bind(this, 'username')}
                >  
                    <option value="">Select user</option>
                    {
                        users.map(( user, index ) => (
                            <option key={index} value={user.username}>{user.username}</option>
                        ))
                    }
                </select>
                <input 
                    type="text" 
                    name="profile-picture" 
                    value={profilePicture} 
                    placeholder="Image url" 
                    onChange={this.props.handleChange.bind(this, 'profilePicture')} 
                />
                <textarea
                    rows="5"
                    placeholder="Description"
                    value={description} 
                    onChange={this.props.handleChange.bind(this, 'description')}>
                </textarea>
                <div className="btn-container">
                    <input type="submit" value={ !isEdit ? "Add Todo" : "Save" } />
                    {
                        isEdit ?(
                            <button type="button" onClick={this.props.cancelEdit.bind(this)}>Cancel</button>
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