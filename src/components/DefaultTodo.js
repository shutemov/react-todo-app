import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <li className="todo" data-todo-text={this.props.name}>
        <div className="todo__li-marker" />
        <div className="todo__li-body">
          <div className="todo__text"> {this.props.name} </div>
          <div className="todo__button-wrapper">
            <button
              className="todo__done-button"
              onClick={this.props.todoDeleter}
            >
              🧺
            </button>
            <button
              className="todo__delete-button"
              onClick={this.props.todoDoner}
            >
              ✔️
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Todo;
