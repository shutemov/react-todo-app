import React from "react";
import Todo from "./Todo";
import TodoListViewer from "./TodoListViewer";

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
      <div>
        <h2>{this.props.name}</h2>
        <input placeholder="Add todo" />
        <button onClick={this.props.todoAdder}> + </button>
        <hr />
        <TodoListViewer>
          <ol>{this.getTodosTemplate()}</ol>
        </TodoListViewer>
      </div>
    );
  }
}

export default TodoList;
