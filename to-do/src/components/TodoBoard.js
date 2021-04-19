import React, {Component} from 'react';
import Todo from './Todo.js';
// import LoadMoreBtn from './loadMoreBtn.js'

class ToDoBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameFilter: '', // value that we will be filtering by,
        //   page: 1, // will be added later
        //   todoLength: 5
        }
    }
    filterTodos = ( username ) => {
        this.setState({
            usernameFilter: username // filtered username
        });
    }
    // loadMore = () => {
    //     const currentState = {...this.state};
    //     currentState['page'] = currentState['page'] + 1;
    //     this.setState(currentState);
    // }

    render(
        {todos} = this.props,
        {usernameFilter} = this.state
    ) {
        // const maxTodosPerPage  = this.state.page * this.state.todoLength;
        // here we can check if the username is null if it isn't we filter the list based on the username
        return (
            <section className="todo-board">
                {usernameFilter ? (
                    <button
                        className="back-btn"
                        onClick={() => this.filterTodos(null)}
                    >
                    &larr;
                    </button>
                ) : (
                    null
                )}

                {todos.filter(todo => {
                    return todo.username.includes(usernameFilter);
                }).map(( todo ) => {
                    return(
                        <Todo
                            key = {todo.id}
                            todo = {todo}
                            deleteTodoHandler = {this.props.deleteTodoHandler}
                            editTodoHandler = {this.props.editTodoHandler}
                            filterTodos = {this.filterTodos}
                            isEdit = {this.props.isEdit}
                        />
                    )
                    {/* if ( index <= maxTodosPerPage ) {
                        return(
                            <Todo
                                key = {todo.id}
                                todo = {todo}
                                todoId = {index}
                                deleteTodo = {this.props.deleteTodo}
                                editTodo = {this.props.editTodo}
                                filterTodos = {this.filterTodos}
                                isEdit = {this.props.isEdit}
                            />
                        )
                    } else {
                        return ( null );
                    } */}
                })}

                {/* {maxTodosPerPage < todos.length ? (
                    <LoadMoreBtn action={this.loadMore} />
                ):(
                    null
                )} */}
            </section>
        )
    }
}

export default ToDoBoard;
