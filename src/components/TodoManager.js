import React from "react";
import TodoList from "./TodoList";
import TodoDoneList from "./TodoDoneList";

class TodoManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.switchDoneTodo = this.switchDoneTodo.bind(this);
  }
}
export default TodoManager;
