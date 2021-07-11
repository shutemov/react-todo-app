import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import TodoDoneList from "./TodoDoneList";
import IndexedDBManager from "../IndexedDBManager";

const StyledTodoManager = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  gap: 40px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: min-content;
    grid-template-rows: min-content min-content;
  }
`;

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

    this.setState({ pad });
  }

  async doUndoneAll() {
    const { todos } = this.state.pad;

    const undoneTodos = todos.map((todo) => {
      todo.isDone = false;
      return todo;
    });

    const pad = this.state.pad;
    pad.todos = undoneTodos;
    await this.indexedDBManager.updatePad(pad);

    this.setState({ pad });
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
    const { title, todos } = this.state.pad;

    return (
      <StyledTodoManager>
        <TodoList
          title={title}
          todos={todos}
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
      </StyledTodoManager>
    );
  }
}

export default TodoManager;
