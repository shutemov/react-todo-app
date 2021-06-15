import React from "react";
import PadAdder from "./PadAdder";
import PadList from "./PadList";

class PadManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pads: [],
    };

    this.createPad = this.createPad.bind(this);
  }

  createPad() {
    const textInput = document.querySelector(".pad-manager__text-input");
    const title = textInput.value;
    const id = this.state.pads.length;

    let newPads = this.state.pads.concat({ id, title });
    this.setState({ pads: newPads });
  }

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
