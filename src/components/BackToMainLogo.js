import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class BackToMainButton extends React.Component {
  render() {
    return (
      <Link className="pad-page__back-to-main-link" to="/">
        <picture>
          <source srcSet="../todo-pad-back.png" />
          <img src="todo-pad-back.png" alt="Todo Pad" />
        </picture>
      </Link>
    );
  }
}

export default BackToMainButton;
