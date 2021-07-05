import React from "react";
import TodoList from "./TodoList";
import TodoDoneList from "./TodoDoneList";
import IndexedDBManager from "../IndexedDBManager";

class TodoManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pad: {
        id: undefined,
        title: undefined,
        todos: [],
      },
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.switchDoneTodo = this.switchDoneTodo.bind(this);
    this.undoneAll = this.undoneAll.bind(this);
  }

  addTodo() {
    const inputElement = document.querySelector("input");
    const name = inputElement.value;
    const isDone = false;

    if (!name) return;

    const newTodo = {
      name,
      isDone,
    };

    let todos = [...this.state.todos, newTodo];

    this.setState({ todos });

    inputElement.value = "";
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

  undoneAll() {
    const undoneTodos = this.state.todos.map((todo) => {
      todo.isDone = false;
      return todo;
    });

    this.setState({ todos: undoneTodos });
  }

  render() {
    return (
      <div className="pad-page__todo-manager">
        <TodoList
          name="%pad name%"
          todoList={this.state.todos}
          todoDeleter={this.deleteTodo}
          todoDoner={this.switchDoneTodo}
          todoAdder={this.addTodo}
        />
        <TodoDoneList
          name="Выполнено"
          todoList={this.state.todos}
          undoneAll={this.undoneAll}
          todoDoner={this.switchDoneTodo}
        />
      </div>
    );
  }
}

export default TodoManager;
