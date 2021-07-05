import React from "react";
import TodoManager from "./TodoManager";
import BackToMainButton from "./BackToMainLogo";
import IndexedDBManager from "../IndexedDBManager";
import { withRouter } from "react-router-dom";

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
