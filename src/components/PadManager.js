import React from "react";
import styled from "styled-components";
import PadAdder from "./PadAdder";
import PadList from "./PadList";
import IndexedDBManager from "../IndexedDBManager";

const StyledPadManager = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-self: center;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

class PadManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pads: [{ id: 100, title: "test" }],
    };

    this.createPad = this.createPad.bind(this);
    this.deletePad = this.deletePad.bind(this);
    this.updatePad = this.updatePad.bind(this);
    this.editPad = this.updatePad.bind(this);
    this._prepareIndexedDB = this._prepareIndexedDB.bind(this);
    this._reloadPads = this._loadPads.bind(this);
  }

  async _prepareIndexedDB() {
    const [dbName, storeName] = ["TodoPad", "Pads"];
    this.indexedDBManager = new IndexedDBManager(dbName, storeName);
    await this.indexedDBManager.init();
  }

  async _loadPads(){
    const pads = await this.indexedDBManager.readAllPads();
    console.log("pads", pads);
    this.setState({ pads });
  }

  async createPad(title) {
    try {
      if (!title) return;

      const todos = [];
      const newPad = { title, todos };
      await this.indexedDBManager.createPad(newPad);
      await this._loadPads()
    } catch (error) {
      console.log(error);
    }
  }

  async deletePad(id) {
    try {
      await this.indexedDBManager.deletePadById(id);
      await this._loadPads()
    } catch (error) {
      console.log(error);
    }
  }

  async updatePad(pad) {
    try {
      await this.indexedDBManager.updatePad(pad);
      await this._loadPads()
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    try {
      await this._prepareIndexedDB();
      await this._loadPads()
    } catch (err) {
      console.log("componentDidMount error", err);
    }
  }

  render() {
    return (
      <StyledPadManager>
        <PadAdder padCreate={this.createPad} />
        <PadList
          pads={this.state.pads}
          deletePad={this.deletePad}
          updatePad={this.updatePad}
          updatePadTitle={this.updatePadTitle}
        />
      </StyledPadManager>
    );
  }
}

export default PadManager;
