import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="pad-page__todo" data-todo-text={this.props.name}>
        <h3> {this.props.name} </h3>
        <div className="pad-page__todo-button-wrapper">
          <button onClick={this.props.todoDeleter}>X</button>
          <button onClick={this.props.todoDoner}>D</button>
        </div>
      </li>
    );
  }
}

export default Todo;
