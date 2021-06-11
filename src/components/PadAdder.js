import React from "react";

class PadAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreating: false,
    };

    this.switchCreatingMode = this.switchCreatingMode.bind(this);
  }

  switchCreatingMode() {
    this.setState({ isCreating: !this.state.isCreating });
  }

}

export default PadAdder;
