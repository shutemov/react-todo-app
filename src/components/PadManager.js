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
    this.deletePad = this.deletePad.bind(this);
  }

  createPad() {
    const textInput = document.querySelector(".pad-manager__text-input");
    const title = textInput.value;
    const id = this.state.pads.length;

    if (!title) return;

    let newPads = this.state.pads.concat({ id, title });
    this.setState({ pads: newPads });
  }

  deletePad(id) {
    const newPads = this.state.pads.filter((pad) => pad.id !== id);

    this.setState({ pads: newPads });
  }

  render() {
    return (
      <div className="pad-manager">
        <div className="pad-manager__subgrid-wrapper">
          <PadAdder padCreator={this.createPad} />
          <PadList pads={this.state.pads} />
        </div>
      </div>
    );
  }
}

export default PadManager;
