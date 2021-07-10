import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import TodoManager from "./TodoManager";
import ImageLink from "./ImageLink";

const StyledPadPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr;
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
        <ImageLink />
        <TodoManager padId={this.state.padId} />
      </StyledPadPage>
    );
  }
}

export default withRouter(PadPage);
