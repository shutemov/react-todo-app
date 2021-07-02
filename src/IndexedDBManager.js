class IndexedDBManager {
  constructor(dbName, storeName) {
    this.dbName = dbName;
    this.storeName = storeName;
  }

  async init() {
    try {
      await this._openConnection();
      await this._createPadStore(); //sync operation
    } catch (error) {
      console.log(error);
    }
  }
}

export default IndexedDBManager;
