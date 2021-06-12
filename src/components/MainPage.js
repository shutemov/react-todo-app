import React from "react";
import AppLogo from "./AppLogo";
import PadManager from "./PadManager";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-page">
        <AppLogo />
        <PadManager />
      </div>
    );
  }
}

export default MainPage;
