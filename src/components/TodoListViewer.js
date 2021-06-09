import React from 'react'
import Todo from './Todo'

class TodoListViewer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default TodoListViewer