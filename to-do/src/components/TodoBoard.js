import React, {Component} from 'react';
import Todo from './Todo.js';
import BackBtn from './backBtn.js';
import LoadMoreBtn from './loadMoreBtn.js'

class ToDoBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: null, // value that we will be filtering by,
          page: 1,
          todoLength: 5
        }
    }
    filterTodos = ( username ) => {
        this.setState({
            ...this.state,
            'username': username // filtered username
        });
    }
    loadMore = () => {
        const currentState = {...this.state};
        currentState['page'] = currentState['page'] + 1;
        this.setState(currentState);
    }

    render() {
        let   todos            = this.props.todos;
        const maxTodosPerPage  = this.state.page * this.state.todoLength;

        // here we can check if the username is null if it isn't we filter the list based on the username
        todos = ( this.state.username != null ) ? todos.filter( todo => todo.username === this.state.username ) : todos;

        return (
            <section className="note-board">
                {this.state.username != null ? (
                    <BackBtn action={this.filterTodos} />
                ) : (
                    null
                )}

                {todos.map(( todo, index ) => {
                    if ( index <= maxTodosPerPage ) {
                        return(
                            <Todo 
                                key = {index} 
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
                    }
                })}

                {maxTodosPerPage < todos.length ? (
                    <LoadMoreBtn action={this.loadMore} />
                ):(
                    null
                )}
            </section>
        )
    }
}

export default ToDoBoard;