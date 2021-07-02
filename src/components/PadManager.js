import React from "react";
import PadAdder from "./PadAdder";
import PadList from "./PadList";
import IndexedDBManager from "../IndexedDBManager";

class PadManager extends React.Component {
  constructor(props) {
    console.log("start PadManager constructor");

    super(props);

    this.state = {
      pads: [{ id: 100, title: "test" }],
    };

    this.createPad = this.createPad.bind(this);
    this.deletePad = this.deletePad.bind(this);
    this._prepareIndexedDB = this._prepareIndexedDB.bind(this);

    console.log("end PadManager constructor");
  }

  async createPad() {
    try {
      const textInput = document.querySelector(".pad-manager__text-input");
      const title = textInput.value;

      if (!title) return;

      const newPad = { title };
      await this.indexedDBManager.createPad(newPad);
      const pads = await this.indexedDBManager.readAllPads();

      this.setState({ pads });
    } catch (error) {
      console.log(error);
    }
  }

  deletePad(id) {
    const newPads = this.state.pads.filter((pad) => pad.id !== id);

    this.setState({ pads: newPads });
  }

  async _prepareIndexedDB() {
    const [dbName, storeName] = ["TodoPad", "Pads"];

    this.indexedDBManager = new IndexedDBManager(dbName, storeName);
    await this.indexedDBManager.init();
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
      <div className="pad-manager">
        <div className="pad-manager__subgrid-wrapper">
          <PadAdder padCreate={this.createPad} />
          <PadList pads={this.state.pads} padDelete={this.deletePad} />
        </div>
      </div>
    );
  }
}

export default PadManager;
