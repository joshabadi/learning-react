import React, {Component} from 'react';

class Todo extends Component {
    render(
        {todo} = this.props
    ) {
        return (
            <article className="todo">
                <img className="profile-picture" src={todo.profilePicture} alt={todo.profilePicture} />
                <div className="todo-content">
                    <h3>{todo.title}</h3>
                    <span>
                        Created by: 
                        <button 
                            className="username-btn" 
                            onClick={() => this.props.filterTodos(todo.username)}
                        >
                            {todo.username}
                        </button>
                    </span>
                    <p>{todo.description}</p>
                    <div className="actions">
                        <button 
                            className="delete-todo" 
                            onClick = {() => this.props.deleteTodoHandler( todo.id )}
                            disabled = {this.props.isEdit}
                        >
                        X
                        </button>
                        <button 
                            className="edit-todo" 
                            onClick = {() => this.props.editTodoHandler( todo.id )}
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