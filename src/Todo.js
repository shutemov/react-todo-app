import React from "react"

class Todo extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            isDone: false,
            isArchived: false
        }

        this.handleCLick = this.handleCLick.bind(this)
    }

    handleCLick(){
        alert('hellow from event')
        console.log(this)
    }

    testClick(){
        console.log(this)
    }

    render(){
        return (<div>
            <h1 onClick={this.handleCLick}> I am todo </h1>
            <h1 onClick={this.testClick}> I am todo </h1>
        </div>        )
    }
}

export default Todo