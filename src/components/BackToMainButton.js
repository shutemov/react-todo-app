import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class BackToMainButton extends React.Component {
  render() {
    return (
      <Link className="pad-page__back-to-main-link" to="/">
        Back to main
      </Link>
    );
  }
}

export default BackToMainButton;
