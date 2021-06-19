import React from 'react'
import Todo from './Todo'

class TodoListViewer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="pad-page__todo-list-viewer">
                {this.props.children}
            </div>
        )
    }
}

export default TodoListViewer