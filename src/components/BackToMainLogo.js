import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-size: 3em;
`;

class BackToMainButton extends React.Component {
  render() {
    return (
      <StyledLink to="/">
        <picture>
          <source srcSet="../todo-pad-back.png" />
          <img src="todo-pad-back.png" alt="Todo Pad" />
        </picture>
      </StyledLink>
    );
  }
}

export default BackToMainButton;
