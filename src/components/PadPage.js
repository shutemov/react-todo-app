import React from "react";
import TodoManager from "./TodoManager";
import BackToMainButton from "./BackToMainButton";

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
