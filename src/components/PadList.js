import React from "react";
import Pad from "./Pad";

class PadList extends React.Component {
  getPadsTemplate() {
    const mappedPads = this.props.pads.map(({ id, title }) => (
      <Pad
        id={id}
        title={title}
        key={id}
        deletePad={this.props.deletePad}
        updatePad={this.props.updatePad}
      />
    ));

    return mappedPads;
  }

  render() {
    return <React.Fragment>{this.getPadsTemplate()}</React.Fragment>;
  }
}

export default PadList;
