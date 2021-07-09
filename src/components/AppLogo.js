import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

class Logo extends React.Component {
  render() {
    return (
      <StyledLogo>
        <picture>
          <source srcSet="todo-pad-logo.png" />
          <img src="todo-pad-logo.png" alt="Todo Pad" />
        </picture>
      </StyledLogo>
    );
  }
}

export default Logo;
