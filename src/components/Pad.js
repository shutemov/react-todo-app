import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Pad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pad-manager__pad">
        <Link className="pad-manager__link" to={`/pads/${this.props.id}`}>
          {this.props.title}
        </Link>
        <button
          className="pad-manager__delete-button"
          onClick={() => {
            this.props.padDelete(this.props.id);
          }}
        >
          ❌
        </button>
      </div>
    );
  }
}

export default Pad;
