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
    this.updatePad = this.updatePad.bind(this);
    this._prepareIndexedDB = this._prepareIndexedDB.bind(this);

    console.log("end PadManager constructor");
  }

  async createPad() {
    try {
      const textInput = document.querySelector(".pad-manager__text-input");
      const title = textInput.value;

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
    } catch (error) {
      console.log(error);
    }
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
          <PadList
            pads={this.state.pads}
            padDelete={this.deletePad}
            padUpdate={this.updatePad}
          />
        </div>
      </div>
    );
  }
}

export default PadManager;
