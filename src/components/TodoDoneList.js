import React from "react";
import TodoListViewer from "./TodoListViewer";
import Todo from "./Todo";

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
    return doneTodosTemplate;
  }

  render() {
    return (
      <div className="pad-page__todo-done-list">
        <div className="pad-page__todo-done-list-title">{this.props.name}</div>
        <TodoListViewer>
          <ol>{this.getDoneTodosTemplate()}</ol>
        </TodoListViewer>
      </div>
    );
  }
}

export default TodoDoneList;
