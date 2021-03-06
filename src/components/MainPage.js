import React from "react";
import styled from "styled-components";
import AppLogo from "./AppLogo";
import PadManager from "./PadManager";

const StyledMainPage = styled.div`
  display: grid;
  grid-template: 200px 1fr / 1fr;
`;

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledMainPage>
        <AppLogo />
        <PadManager />
      </StyledMainPage>
    );
  }
}

export default MainPage;
