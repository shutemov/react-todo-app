import React from "react";
import styled from "styled-components";
import DefaultTodo from "./DefaultTodo";
import TodosViewer from "./TodoListViewer";
import TodoAdder from "./TodoAdder";

const StyledTodoList = styled.div`
  position: relative; /*for absolute position TodoAdder*/
  width: 375px;
  height: 500px;
  border: 1px solid;
  overflow: hidden;
`;

const OrderList = styled.ol`
  list-style-position: inside;
  padding-left: 0;
  text-align: center;
`;

const Title = styled.div`
  margin-left: 40px;
  margin-top: 30px;
  font-size: 20pt;
`;

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
            name={name}
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
      <StyledTodoList>
        <Title>{title}</Title>
        <TodosViewer>
          <OrderList>{this.getTodosTemplate()}</OrderList>
        </TodosViewer>
        <TodoAdder addTodo={addTodo} />
      </StyledTodoList>
    );
  }
}

export default TodoList;
