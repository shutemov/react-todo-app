import React from "react";
import TodoListViewer from "./TodoListViewer";
import DoneTodo from "./DoneTodo";

class TodoDoneList extends React.Component {
  constructor(props) {
    super(props);
  }

  getDoneTodos() {
    const doneTodos = this.props.todoList.filter((todo) => todo.isDone);
    return doneTodos;
  }

  getDoneTodosTemplate() {
    const doneTodosTemplate = this.getDoneTodos().map(
      ({ name, isDone }, index) => {
        return (
          <DoneTodo
            name={name}
            todoDoner={this.props.todoDoner}
            todoDeleter={this.props.todoDeleter}
            isDone={isDone}
            key={index}
          />
        );
      }
    );
    return doneTodosTemplate;
  }

  render() {
    return (
      <div className="todo-done-list">
        <div className="todo-done-list__header">
          <div className="todo-done-list__title">
            {this.props.name}
          </div>
          <button
            className="todo-done-list__drop-button"
            onClick={this.props.undoneAll}
          >
            Очистить
          </button>
        </div>
        <TodoListViewer>
          <ol>{this.getDoneTodosTemplate()}</ol>
        </TodoListViewer>
      </div>
    );
  }
}

export default TodoDoneList;
