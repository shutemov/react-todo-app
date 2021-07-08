import React from "react";
import DefaultTodo from "./DefaultTodo";
import TodoListViewer from "./TodoListViewer";
import TodoAdder from "./TodoAdder";

class TodoList extends React.Component {
  getUndoneTodos() {
    const { todos } = this.props;

    const undoneTodos = todos.filter((todo) => {
      return !todo.isDone;
    });

    return undoneTodos;
  }

  getTodosTemplate() {
    const { switchDoneTodo, deleteTodo } = this.props;

    const todosTemplate = this.getUndoneTodos().map(
      ({ name, isDone }, index) => {
        return (
          <DefaultTodo
            textContent={name}
            doneTodo={switchDoneTodo}
            deleteTodo={deleteTodo}
            isDone={isDone}
            key={index}
          />
        );
      }
    );

    return todosTemplate;
  }

  render() {
    const { title, addTodo } = this.props;
    return (
      <div className="todo-list">
        <div className="todo-list__title ">{title}</div>
        <TodoListViewer>
          <ol>{this.getTodosTemplate()}</ol>
        </TodoListViewer>
        <TodoAdder addTodo={addTodo} />
      </div>
    );
  }
}

export default TodoList;
