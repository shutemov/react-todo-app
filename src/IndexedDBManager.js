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

  async _openConnection() {
    let version = 1;
    let openRequest = indexedDB.open(this.dbName, version);
    let openRequestResult = await this.DBOpenRequestHandler(openRequest);
    this.db = openRequestResult;
  }

}

export default IndexedDBManager;
