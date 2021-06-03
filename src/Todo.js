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
        return (<div>
            <h1> I am todo </h1>
            <button onClick={this.switchDone}>{this.state.isDone?'undone':'done'}</button>
        </div>)
    }
}

export default Todo