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

  _getTransaction(type) {
    if (!this.db) return;
    const transaction = this.db.transaction(this.storeName, type);
    return transaction;
  }

  DBOpenRequestHandler(openRequest) {
    return new Promise((resolve, reject) => {
      openRequest.onerror = () => {
        reject(openRequest.error);
      };

      openRequest.onsuccess = () => {
        resolve(openRequest.result);
      };

      openRequest.onupgradeneeded = (event) => {
        this._createPadStore(event);
        resolve(openRequest.result);
      };
    });
  }

  //default sync method, but we use promise for oncomplete checking
  _createPadStore() {
    if (!this.db) return;

    const options = {
      keyPath: "id",
      autoIncrement: true,
    };

    this.db.createObjectStore(this.storeName, options);
    let transaction = this.db.transaction;

    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = (request) => {
        reject(request.error);
      };
    });
  }

  createPad(pad) {
    let transaction = this.db.transaction(this.storeName, "readwrite");
    let pads = transaction.objectStore(this.storeName);

    let request = pads.add(pad);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        console.log("Pad добавлен в хранилище", request.result);
        resolve(true);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  readAllPads() {
    let transaction = this.db.transaction(this.storeName, "readonly");
    let padStore = transaction.objectStore(this.storeName);
    let cursorRequest = padStore.openCursor();

    const pads = [];

    return new Promise((resolve, reject) => {
      cursorRequest.onsuccess = () => {
        let cursor = cursorRequest.result;
        if (!cursor) {
          resolve(pads);
          return;
        }

        let storeObject = cursor.value;
        let [id, title] = [cursor.primaryKey, storeObject.title];
        pads.push({ id, title });
        cursor.continue();
      };

      cursorRequest.onerror = () => {
        reject(cursorRequest.errors);
      };
    });
  }

  readPadById(id) {}
  updatePadById(pad) {}
  deletePadById(id) {}
}

export default IndexedDBManager;
