import React from "react"

class Todo extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isDone: false,
            isArchived: false
        }

        this.switchDone = this.switchDone.bind(this)
    }

    switchDone(){       
        this.setState({isDone:!this.state.isDone})
    }


    render(){
        return (
            <li data-todo-text={this.props.name}>
                <h3> {this.props.name} </h3>
                <button onClick={this.props.todoDoner}>Done</button>
                <button onClick={this.props.todoDeleter}>Delete</button>
            </li>
        )
    }
}

export default Todo