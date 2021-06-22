import React from 'react'
import Todo from './DefaultTodo'

class TodoListViewer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="todo-list-viewer">
                {this.props.children}
            </div>
        )
    }
}

export default TodoListViewer