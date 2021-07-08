import React from "react";
import Pad from "./Pad";

class PadList extends React.Component {
  getPadsTemplate() {
    const { pads, deletePad, updatePad, editPad } = this.props;

    const mappedPads = pads.map(({ id, title }) => (
      <Pad
        key={id}
        id={id}
        title={title}
        deletePad={deletePad}
        updatePad={updatePad}
        editPad={editPad}
      />
    ));

    return mappedPads;
  }

  render() {
    return <React.Fragment>{this.getPadsTemplate()}</React.Fragment>;
  }
}

export default PadList;
