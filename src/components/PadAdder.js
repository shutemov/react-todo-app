import React from "react";

class PadAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreating: false,
    };

    this.switchCreatingMode = this.switchCreatingMode.bind(this);
    this.getConditionalTemplate = this.getConditionalTemplate.bind(this);
    this.createPadProxy = this.createPadProxy.bind(this);
  }

  switchCreatingMode() {
    this.setState({ isCreating: !this.state.isCreating });
  }

  getConditionalTemplate() {
    if (!this.state.isCreating) {
      return (
        <div
          className="pad-manager__create-button-container"
          onClick={this.switchCreatingMode}
        >
          <div className="pad-manager__create-button " />
        </div>
      );
    }

    return (
      <div className="pad-manager__input-container">
        <input
          className="pad-manager__text-input"
          type="text"
          placeholder="Enter pad title here"
        />
        <button
          className="pad-manager__create-pad-button"
          type="submit"
          placeholder="Enter pad title here"
          value="+"
          onClick={this.createPadProxy}
        >
          +
        </button>
      </div>
    );
  }

  createPadProxy() {
    this.props.padCreate();
    this.switchCreatingMode();
  }

  render() {
    return (
      <div className="pad-manager__pad-adder">
        {this.getConditionalTemplate()}
      </div>
    );
  }
}

export default PadAdder;
