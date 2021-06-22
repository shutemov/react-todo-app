import React from "react";

class DoneTodo extends React.Component {
  render() {
    return (
      <li className="done-todo" data-todo-text={this.props.name}>
        <div className="done-todo__li-marker" />
        <div className="done-todo__li-body">
          <div className="done-todo__text"> {this.props.name} </div>
          <div className="done-todo__button-wrapper">
            <button
              className="done-todo__switch-button"
              onClick={this.props.todoDoner}
            ></button>
          </div>
        </div>
      </li>
    );
  }
}

export default DoneTodo;
