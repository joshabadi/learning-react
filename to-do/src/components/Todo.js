import React, {Component} from 'react';

class Todo extends Component {
    render() {
        return (
            <article className="todo">
                <img className="profile-picture" src={this.props.todo.profilePicture} alt={this.props.todo.profilePicture} />
                <div className="todo-content">
                    <h3>{this.props.todo.title}</h3>
                    <span>
                        Created by: 
                        <button 
                            className="username-btn" 
                            onClick={() => this.props.filterTodos(this.props.todo.username)}
                        >
                            {this.props.todo.username}
                        </button>
                    </span>
                    <p>{this.props.todo.description}</p>
                    <div className="actions">
                        <button 
                            className="delete-todo" 
                            onClick = {() => this.props.deleteTodoHandler( this.props.todo.id )}
                            disabled = {this.props.isEdit}
                        >
                        X
                        </button>
                        <button 
                            className="edit-todo" 
                            onClick = {() => this.props.editTodoHandler( this.props.todo.id )}
                            disabled = {this.props.isEdit}
                        >
                        edit
                        </button>
                    </div>
                </div>
            </article>
        )
    }
}

export default Todo;