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

  async editTitle(newTitle) {
    this._switchEditingMode();

    try {
      const padId = this.props.id;
      const pad = await this.indexedDBManager.readPadById(padId);
      pad.title = newTitle;
      await this.props.updatePad(pad); //from pad manager
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    try {
      this.indexedDBManager = new IndexedDBManager("TodoPad", "Pads");
      await this.indexedDBManager.init();
    } catch (error) {
      console.log(error);
    }

    this.setState({ title: this.props.title });
  }

  render() {
    return (
      <div className="pad">
        {this._getConditionalTemplate()}
        <button
          className="pad__delete-button"
          onClick={() => {
            this.props.deletePad(this.props.id);
          }}
        >
          ❌
        </button>
        <button
          className="pad__edit-button"
          onClick={() => {
            this.editTitle(this.props.id);
          }}
        >
          ✏️
        </button>
      </div>
    );
  }
}

export default Pad;
