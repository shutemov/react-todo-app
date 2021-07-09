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

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding-top: 30px;
  padding-left: 40px;
`;

const Title = styled.div`
  font-size: 20pt;
`;

const ClearButton = styled.div`
  border-radius: 40px;
  width: 100px;
  height: 40px;
  background-color: #c4c4c4;
  border: none;
  margin-left: 30px;
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
          <ol>{this.getDoneTodosTemplate()}</ol>
        </TodosViewer>
      </StyledTodoDoneList>
    );
  }
}

export default TodoDoneList;
