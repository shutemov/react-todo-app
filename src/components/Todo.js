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
            <li data-attr={this.props.text}>
                <h3> {this.props.text} </h3>
                <button onClick={this.switchDone}>{this.state.isDone?'undone':'done'}</button>
                <button onClick={this.props.onDelete}>Delete</button>
            </li>
        )
    }
}

export default Todo