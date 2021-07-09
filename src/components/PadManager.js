import React from "react";
import styled from "styled-components";
import PadAdder from "./PadAdder";
import PadList from "./PadList";
import IndexedDBManager from "../IndexedDBManager";

const StyledPadManager = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

const SubgridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 40px;
  align-items: center;
  justify-items: center;
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
  }

  async _prepareIndexedDB() {
    const [dbName, storeName] = ["TodoPad", "Pads"];
    this.indexedDBManager = new IndexedDBManager(dbName, storeName);
    await this.indexedDBManager.init();
  }

  async createPad() {
    try {
      const textInput = document.querySelector(".pad-manager__text-input");
      const title = textInput.value; //todo FIX THIS

      if (!title) return;

      const todos = [];
      const newPad = { title, todos };
      await this.indexedDBManager.createPad(newPad);

      const pads = await this.indexedDBManager.readAllPads();
      this.setState({ pads });
    } catch (error) {
      console.log(error);
    }
  }

  async deletePad(id) {
    try {
      await this.indexedDBManager.deletePadById(id);
      const pads = await this.indexedDBManager.readAllPads();
      this.setState({ pads });
    } catch (error) {
      console.log(error);
    }
  }

  async updatePad(pad) {
    try {
      await this.indexedDBManager.updatePad(pad);
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    try {
      await this._prepareIndexedDB();
      const pads = await this.indexedDBManager.readAllPads();
      this.setState({ pads });
    } catch (err) {
      console.log("componentDidMount error", err);
    }
  }

  render() {
    return (
      <StyledPadManager>
        <SubgridContainer>
          <PadAdder padCreate={this.createPad} />
          <PadList
            pads={this.state.pads}
            deletePad={this.deletePad}
            updatePad={this.updatePad}
            updatePadTitle={this.updatePadTitle}
          />
        </SubgridContainer>
      </StyledPadManager>
    );
  }
}

export default PadManager;
