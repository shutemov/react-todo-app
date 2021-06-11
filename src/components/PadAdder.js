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

  render() {
    return (
      <div>
        <button onClick={this.switchCreatingMode}>+</button>
        {this.state.isCreating ? (
          <input type="text" placeholder="enter pad title" />
        ) : null}
      </div>
    );
  }
}

export default PadAdder;
