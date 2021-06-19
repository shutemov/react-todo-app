import React from "react";
import Todo from "./Todo";
import TodoListViewer from "./TodoListViewer";
import TodoAdder from "./TodoAdder";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  getUndoneTodos() {
    const undoneTodos = this.props.todoList.filter((todo) => {
      return !todo.isDone;
    });

    return undoneTodos;
  }

  getTodosTemplate() {
    const todosTemplate = this.getUndoneTodos().map(
      ({ name, isDone }, index) => {
        return (
          <Todo
            name={name}
            todoDoner={this.props.todoDoner}
            todoDeleter={this.props.todoDeleter}
            isDone={isDone}
            key={index}
          />
        );
      }
    );

    return todosTemplate;
  }

  render() {
    return (
      <div className="pad-page__todo-list">
        <div className="pad-page__todo-list-title">{this.props.name}</div>
        <hr />
        <TodoListViewer>
          <ol>{this.getTodosTemplate()}</ol>
        </TodoListViewer>
        <TodoAdder todoAdder={this.props.todoAdder} />
      </div>
    );
  }
}

export default TodoList;
