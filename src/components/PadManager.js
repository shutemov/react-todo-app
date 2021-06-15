import React from "react";
import PadAdder from "./PadAdder";
import PadList from "./PadList";

class PadManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pads: [],
    };
  }

  addPad() {}

  render() {
    return (
      <div className="pad-manager">
        <div className="pad-manager__subgrid-wrapper">
          <PadAdder />
          <PadList pads={this.state.pads} />
        </div>
      </div>
    );
  }
}

export default PadManager;
