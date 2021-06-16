import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <picture>
          <source srcSet="todo-pad-logo.png" />
          <img src="todo-pad-logo.png" alt="Todo Pad" />
        </picture>
      </div>
    );
  }
}

export default Logo;
