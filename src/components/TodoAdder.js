import React from "react";
import styled from "styled-components";

const TodoAddContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 5px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 15pt;
`;

class TodoAdder extends React.Component {
  render() {
    const { addTodo } = this.props;

    return (
      <TodoAddContainer>
        <Input placeholder="Add todo" />
        <Button  onClick={addTodo}>
          +
        </Button>
      </TodoAddContainer>
    );
  }
}

export default TodoAdder;
