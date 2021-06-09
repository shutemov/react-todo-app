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
}

export default TodoList;
