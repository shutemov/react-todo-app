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

  async doUndoneAll() {
    const undoneTodos = this.state.pad.todos.map((todo) => {
      todo.isDone = false;
      return todo;
    });

    const pad = this.state.pad;
    pad.todos = undoneTodos;
    await this.indexedDBManager.updatePad(pad);

    this.setState({ todos: undoneTodos });
  }

  async componentDidMount() {
    try {
      this.indexedDBManager = new IndexedDBManager("TodoPad", "Pads");
      await this.indexedDBManager.init();

      const padId = this.props.padId;
      const pad = await this.indexedDBManager.readPadById(padId);

      this.setState({ pad });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { todoListTitle } = this.props;

    return (
      <div className="pad-page__todo-manager">
        <TodoList
          title={todoListTitle}
          todos={this.state.pad.todos}
          deleteTodo={this.deleteTodo}
          switchDoneTodo={this.switchDoneTodo}
          addTodo={this.addTodo}
        />
        <TodoDoneList
          title="Выполнено"
          todos={this.state.pad.todos}
          undoneAll={this.doUndoneAll}
          switchDoneTodo={this.switchDoneTodo}
        />
      </div>
    );
  }
}

export default TodoManager;
