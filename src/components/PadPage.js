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

  render() {
    return (
      <div className="pad-page">
        <BackToMainButton />
        <TodoManager />
      </div>
    );
  }
}

export default PadPage;
