import React from "react";
import Pad from "./Pad";

class PadList extends React.Component {
  constructor(props) {
    super(props);
  }

  getPadsTemplate() {
    return this.props.pads.map(({ id, title }) => (
      <Pad id={id} title={title} key={id}></Pad>
    ));
  }

  render() {
    return <React.Fragment>{this.getPadsTemplate()}</React.Fragment>;
  }
}

export default PadList;
