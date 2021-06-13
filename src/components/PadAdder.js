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
      <div className="pad-manager__pad-adder">
        <div className="test">
          
        <button
          className="pad-manager__create-button"
          onClick={this.switchCreatingMode}
        >
          +
        </button>
        {this.state.isCreating ? (
          <input type="text" placeholder="enter pad title" />
        ) : null}
        </div>
      </div>
    );
  }
}

export default PadAdder;
