import React from "react";

class TodoAdder extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="Add todo" />
        <button onClick={this.props.todoAdder}> + </button>
      </div>
    );
  }
}

export default TodoAdder;
