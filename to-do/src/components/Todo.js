import React, {Component} from 'react';
import DeleteTodoBtn from './deleteTodoBtn';
import EditTodoBtn from './editTodoBtn';
import UsernameBtn from './usernameBtn';
import ProfilePicture from './profilePicture';

class Todo extends Component {
    render() {
        const { filterTodos, todo, deleteTodo, editTodo, todoId, isEdit } = this.props;
        return (
            <section className="todo">
                <ProfilePicture src={todo.profilePicture} />
                <div className="todo-content">
                    <h3>{todo.title}</h3>
                    <span>
                        Created by: 
                        <UsernameBtn action={filterTodos} additionalParams={todo.username} />
                    </span>
                    <p>{todo.description}</p>
                    <div className="actions">
                        <DeleteTodoBtn todoId={todoId} deleteTodo={deleteTodo} disabled={isEdit} />
                        <EditTodoBtn todoId={todoId} todo={todo} editTodo={editTodo} disabled={isEdit} />
                    </div>
                </div>
            </section>
        )
    }
}

export default Todo;