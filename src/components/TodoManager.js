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
    this.doUndoneAll = this.doUndoneAll.bind(this);
  }

  async addTodo() {
    const inputElement = document.querySelector("input");
    const name = inputElement.value;
    const isDone = false;

    if (!name) return;

    const newTodo = {
      name,
      isDone,
    };

    const pad = this.state.pad;
    pad.todos = [...pad.todos, newTodo];
    await this.indexedDBManager.updatePad(pad);

    this.setState({ pad });
    inputElement.value = "";
  }

  async deleteTodo(e) {
    const deleteCandidateElement = e.target.closest("li");
    const deleteCandidateTodoText =
      deleteCandidateElement.getAttribute("data-todo-text");

    const todos = this.state.pad.todos.filter((todo) => {
      return todo.name != deleteCandidateTodoText;
    });

    const pad = this.state.pad;
    pad.todos = todos;
    await this.indexedDBManager.updatePad(pad);

    this.setState({ pad });
  }

  async switchDoneTodo(e) {
    const targetElement = e.target.closest("li");
    const targetTodoText = targetElement.getAttribute("data-todo-text");

    const todos = this.state.pad.todos.map((todo) => {
      if (todo.name === targetTodoText) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    const pad = this.state.pad;
    pad.todos = todos;
    await this.indexedDBManager.updatePad(pad);

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
