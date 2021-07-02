import React from "react";
import Pad from "./Pad";

class PadList extends React.Component {
  getPadsTemplate() {
    const mappedPads = this.props.pads.map(({ id, title }) => (
      <Pad id={id} title={title} key={id} padDelete={this.props.padDelete} />
    ));

    return mappedPads;
  }

  render() {
    return <React.Fragment>{this.getPadsTemplate()}</React.Fragment>;
  }
}

export default PadList;
