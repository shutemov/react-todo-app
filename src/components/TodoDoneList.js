import React from "react";
import TodoListViewer from "./TodoListViewer";
import Todo from "./Todo";

class TodoDoneList extends React.Component {
  constructor(props) {
    super(props);
  }

  getDoneTodos() {
    return this.props.todoList.filter((todo) => todo.isDone);
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <TodoListViewer>
          <ol>
            {this.getDoneTodos().map(({ name, isDone }, index) => {
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

export default TodoDoneList;
