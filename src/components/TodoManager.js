import React from "react";
import TodoList from "./TodoList";
import TodoDoneList from "./TodoDoneList";

class TodoManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.switchDoneTodo = this.switchDoneTodo.bind(this);
  }

  addTodo() {
    const name = document.querySelector("input").value;
    const isDone = false;
    const newTodo = {
      name,
      isDone,
    };

    let todos = [...this.state.todos, newTodo];

    this.setState({ todos });
  }

  deleteTodo(e) {
    const deleteCandidateElement = e.target.closest("li");
    const deleteCandidateTodoText =
      deleteCandidateElement.getAttribute("data-todo-text");

    let todos = this.state.todos.filter((todo) => {
      return todo.name != deleteCandidateTodoText;
    });

    this.setState({ todos });
  }

  switchDoneTodo(e) {
    const targetElement = e.target.closest("li");
    const targetTodoName = targetElement.getAttribute("data-todo-text");

    const todos = this.state.todos.map((todo) => {
      if (todo.name === targetTodoName) {
        todo.isDone = !todo.isDone;
      }

      return todo;
    });

    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <TodoList
          name="Мой пэд"
          todoList={this.state.todos}
          todoDeleter={this.deleteTodo}
          todoDoner={this.switchDoneTodo}
          todoAdder={this.addTodo}
        />
        <hr />
        <TodoDoneList name="Выполнено" todoList={this.state.todos} />
      </div>
    );
  }
}

export default TodoManager;
