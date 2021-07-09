import React from "react";
import styled from "styled-components";
import DefaultTodo from "./DefaultTodo";

const StyledTodosViewer = styled.div`
  padding: 0 12px 0 12px;
  height: 90%;
  overflow-y: scroll;
`;

class TodosViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <StyledTodosViewer>{children}</StyledTodosViewer>;
  }
}

export default TodosViewer;
