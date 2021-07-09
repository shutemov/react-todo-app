import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PadTitleEditor from "./PadTitleEditor";
import IndexedDBManager from "../IndexedDBManager";

const StyledPad = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  justify-items: center;
  width: 300px;
  height: 300px;
  border: 5px solid;
  border-radius: 5px;
  background-color: #989391;
`;

const DeleteButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  width: 64px;
  height: 64px;
  font-size: 32px;
  border: none;
  background-color: #989391;
`;

const EditButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 64px;
  height: 64px;
  font-size: 32px;
  border: none;
  background-color: #989391;
`;

const StyledLink = styled(Link)`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20pt;
  text-decoration: none;
  color: #f5f3f5;
`;

class Pad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: undefined,
      isTitleEditing: false,
    };

    this.editTitle = this.editTitle.bind(this);
    this._switchEditingMode = this._switchEditingMode.bind(this);
    this._getConditionalTemplate = this._getLink.bind(this);
  }

  _switchEditingMode() {
    const isTitleEditing = !this.state.isTitleEditing;
    this.setState({ isTitleEditing });
  }

  _getLink() {
    const target = `/pads/${this.props.id}`;
    return (
      <StyledLink to={target}>
        {this.state.title}
      </StyledLink>
    );
  }

  _getTitleEditor() {
    return <PadTitleEditor editTitle={this.editTitle} />;
  }

  async editTitle(newTitle) {
    const { updatePad } = this.props;

    this._switchEditingMode();

    try {
      const padId = this.props.id;
      const pad = await this.indexedDBManager.readPadById(padId);
      pad.title = newTitle;
      await updatePad(pad); //from pad manager
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
    const { id, deletePad } = this.props;
    const { isTitleEditing } = this.state;

    return (
      <StyledPad>
        {isTitleEditing ? this._getTitleEditor() : this._getLink()}
        <DeleteButton
          onClick={() => {
            deletePad(id);
          }}
        >
          ❌
        </DeleteButton>
        <EditButton
          onClick={() => {
            this.editTitle(id);
          }}
        >
          ✏️
        </EditButton>
      </StyledPad>
    );
  }
}

export default Pad;
