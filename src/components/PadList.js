import React from "react";
import Pad from "./Pad";

class PadList extends React.Component {
  constructor(props) {
    super(props);
  }

  getPadsTemplate() {
    return this.props.pads.map(({ id, title }) => (
      <Pad id={id} title={title}></Pad>
    ));
  }

  render() {
    return <div>{this.getPadsTemplate()}</div>;
  }
}

export default PadList;
