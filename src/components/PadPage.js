import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import TodoManager from "./TodoManager";
import BackToMainButton from "./BackToMainLogo";

const StyledPadPage = styled.div`
  display: grid;
  grid-column: 1fr;
  grid-row: 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

class PadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      padId: undefined,
    };
  }

  componentDidMount() {
    const padId = +this.props.match.params.id;
    this.setState({ padId });
  }

  render() {
    return (
      <StyledPadPage>
        <BackToMainButton />
        <TodoManager padId={this.state.padId} />
      </StyledPadPage>
    );
  }
}

export default withRouter(PadPage);
