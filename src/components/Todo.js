import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <li className="pad-page__todo" data-todo-text={this.props.name}>
        <div className="pad-page__li-marker" />
        <div className="pad-page__li-body">
          <div className="pad-page__todo-text"> {this.props.name} </div>
          <div className="pad-page__todo-button-wrapper">
            <button className="todo__done-button" onClick={this.props.todoDeleter}>🧺</button>
            <button className="todo__delete-button" onClick={this.props.todoDoner}>✔️</button>
          </div>
        </div>
      </li>
    );
  }
}

export default Todo;
