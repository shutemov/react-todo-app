import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Мой список дел',
            todos: [],
            done: []
        }

        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.createTodoListTemplate = this.createTodoListTemplate.bind(this)
    }

    addTodo() {
        let todoText = document.querySelector('input').value
        let newTodos = [...this.state.todos, todoText]
        this.setState({
            todos: newTodos
        })  
    }

    deleteTodo(e){
        const deleteCandidateElement = e.target.closest('li')
        const deleteCandidateTodoText = deleteCandidateElement.getAttribute('data-attr')

        let newTodos = this.state.todos.filter((todo)=>{return todo != deleteCandidateTodoText})
        
        this.setState({
            todos: newTodos
        })
    }

    createTodoListTemplate() {
        const todos = this.state.todos.map((todo)=>{
            return (
                <Todo text={todo} onDone={this.switchDone} onDelete={this.deleteTodo} key={todo}/>
            )
        })

        return (<ol>{todos}</ol>)
    }

    render() {
        return ( 
        <div>
            <h2 contentEditable>{this.state.name}</h2>
            <input placeholder='Add todo'/> 
            <button onClick={this.addTodo}> + </button>
            <hr/> 
            {this.createTodoListTemplate()}
        </div>
        )
    }
}

export default TodoList