import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PadTitleEditor from "./PadTitleEditor";
import IndexedDBManager from "../IndexedDBManager";

class Pad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: undefined,
      isTitleEditing: false,
    };

    this.editTitle = this.editTitle.bind(this);
    this._switchEditingMode = this._switchEditingMode.bind(this);
    this._getConditionalTemplate = this._getConditionalTemplate.bind(this);
  }

  _switchEditingMode() {
    const isTitleEditing = !this.state.isTitleEditing;
    this.setState({ isTitleEditing });
  }

  _getConditionalTemplate() {
    if (!this.state.isTitleEditing) {
      return (
        <Link className="pad__link" to={`/pads/${this.props.id}`}>
          {this.state.title}
        </Link>
      );
    }

    return <PadTitleEditor editTitle={this.editTitle} />;
  }
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
