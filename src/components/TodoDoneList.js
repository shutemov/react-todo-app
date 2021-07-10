import React from "react";
import styled from "styled-components";
import TodosViewer from "./TodoListViewer";
import DoneTodo from "./DoneTodo";

const StyledTodoDoneList = styled.div`
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

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.div`
  margin-left: 40px;
  margin-top: 30px;
  font-size: 20pt;
`;

const ClearButton = styled.button`
  align-self: flex-end;
  width: 100px;
  height: 40px;
  margin-right: 30px;
  border-radius: 40px;
  background-color: #c4c4c4;
  border: none;
`;

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
      <StyledTodoDoneList>
        <Header>
          <Title>{title}</Title>
          <ClearButton onClick={undoneAll}>Очистить</ClearButton>
        </Header>
        <TodosViewer>
          <OrderList>{this.getDoneTodosTemplate()}</OrderList>
        </TodosViewer>
      </StyledTodoDoneList>
    );
  }
}

export default TodoDoneList;
