import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <picture>
          <source srcSet="Todo_Pad.png" />
          <img src="Todo_Pad.png" alt="Todo Pad" />
        </picture>
      </div>
    );
  }
}

export default Logo;
