import React from "react";
import Todo from "./Todo";
import TodoListViewer from "./TodoListViewer";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  getUndoneTodos() {
    console.log("this.props.todoList", this.props.todoList);
    return this.props.todoList.filter((todo) => {
      return !todo.isDone;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <input placeholder="Add todo" />
        <button onClick={this.props.todoAdder}> + </button>
        <hr />
        <TodoListViewer>
          <ol>
            {this.getUndoneTodos().map(({ name, isDone }, index) => {
              console.log("todo in map", name, isDone);

              return (
                <Todo
                  name={name}
                  todoDoner={this.props.todoDoner}
                  todoDeleter={this.props.todoDeleter}
                  isDone={isDone}
                  key={index}
                />
              );
            })}
          </ol>
        </TodoListViewer>
      </div>
    );
  }
}

export default TodoList;
