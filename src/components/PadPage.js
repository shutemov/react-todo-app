import React from "react";
import TodoManager from "./TodoManager";
import BackToMainButton from "./BackToMainLogo";
import AppLogo from "./AppLogo";

class PadPage extends React.Component {
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
