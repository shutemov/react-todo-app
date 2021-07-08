import React from "react";
import TodoListViewer from "./TodoListViewer";
import DoneTodo from "./DoneTodo";

class TodoDoneList extends React.Component {
  constructor(props) {
    super(props);
  }

  getDoneTodos() {
    const { todos } = this.props;
    const doneTodos = todos.filter((todo) => todo.isDone);

    return doneTodos;
  }

  getDoneTodosTemplate() {
    const { switchDoneTodo } = this.props;

    const doneTodosTemplate = this.getDoneTodos().map(
      ({ name, isDone }, index) => {
        return (
          <DoneTodo
            key={index}
            name={name}
            switchDoneTodo={switchDoneTodo}
            isDone={isDone}
          />
        );
      }
    );
    return doneTodosTemplate;
  }

  render() {
    const { title, undoneAll } = this.props;
    
    return (
      <div className="todo-done-list">
        <div className="todo-done-list__header">
          <div className="todo-done-list__title">{title}</div>
          <button className="todo-done-list__drop-button" onClick={undoneAll}>
            Очистить
          </button>
        </div>
        <TodoListViewer>
          <ol>{this.getDoneTodosTemplate()}</ol>
        </TodoListViewer>
      </div>
    );
  }
}

export default TodoDoneList;
