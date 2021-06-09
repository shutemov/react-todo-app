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

}

export default TodoDoneList;
