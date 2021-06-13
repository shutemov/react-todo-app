import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Pad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pad-manager__pad">
        <Link to={`/pads/${this.props.id}`}>{this.props.title}</Link>
        <button>Delete</button>
      </div>
    );
  }
}

export default Pad;
