import React from "react";

class DefaultTodo extends React.Component {
  render() {
    const { textContent, deleteTodo, doneTodo } = this.props;

    return (
      <li className="todo" data-todo-text={textContent}>
        <div className="todo__li-marker" />
        <div className="todo__li-body">
          <div className="todo__text"> {textContent} </div>
          <div className="todo__button-wrapper">
            <button className="todo__done-button" onClick={deleteTodo}>
              🧺
            </button>
            <button className="todo__delete-button" onClick={doneTodo}>
              ✔️
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default DefaultTodo;
