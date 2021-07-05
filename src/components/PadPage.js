import React from "react";
import TodoManager from "./TodoManager";
import BackToMainButton from "./BackToMainLogo";
import { withRouter } from "react-router-dom";

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
      <div className="pad-page">
        <BackToMainButton />
        <TodoManager padId={this.state.padId} />
      </div>
    );
  }
}

export default PadPage;
