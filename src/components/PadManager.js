import React from "react";
import PadAdder from "./PadAdder";
import PadList from "./PadList";

class PadManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pads: [
        {
          id: 1,
          title: "pad1",
        },
        {
          id: 2,
          title: "pad2",
        },
        {
          id: 3,
          title: "pad3",
        },
        {
          id: 4,
          title: "pad4",
        },
        {
          id: 5,
          title: "pad3",
        },
        {
          id: 6,
          title: "pad4",
        },
      ],
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
