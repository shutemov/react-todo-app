import React from "react";

class TodoAdder extends React.Component {
  render() {
    return (
      <div className="pad-page__todo-adder-wrapper">
        <input className="pad-page__add-todo-input" placeholder="Add todo" />
        <button
          className="pad-page__add-todo-button"
          onClick={this.props.todoAdder}
        >
          +
        </button>
      </div>
    );
  }
}

export default TodoAdder;
