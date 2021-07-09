import React from "react";
import styled from "styled-components";

const Li = styled.li`
  display: flex;
  align-items: center;
  background-color: #c4c4c4;
  border-radius: 30px;
  width: 100%;
  min-height: 50px;
  margin-top: 12px;
`;

const LiMarker = styled.div`
  display: list-item;
  width: 10%;
`;

const LiBody = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: start;
  text-align: start;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif☺☺;
`;

const Text = styled.div`
  width: 75%;
  word-wrap: break-word;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
`;

const DoneButton = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: none;
  background-color: #f3f3f5;
`;

const DeleteButton = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: none;
  background-color: #edd0d0;
`;

class DefaultTodo extends React.Component {
  render() {
    const { name, deleteTodo, doneTodo } = this.props;

    return (
      <Li data-todo-text={name}>
        <LiMarker />
        <LiBody>
          <Text> {name} </Text>
          <ButtonContainer>
            <DeleteButton onClick={deleteTodo}>🧺</DeleteButton>
            <DoneButton onClick={doneTodo}>✔️</DoneButton>
          </ButtonContainer>
        </LiBody>
      </Li>
    );
  }
}

export default DefaultTodo;
