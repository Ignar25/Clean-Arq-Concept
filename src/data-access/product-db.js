const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// Set some defaults
db.defaults({ products: [] }).write();

const productAdb = {
  getProductById: (id) => {
    return {
      id: "1",
      name: "Toke",
      description: "tokeaaaaa",
      date: new Date().setTime(1596033494),
    };
  },
  addProduct: (product) => {
    db.get("products").push(product).write();
  },
  addTableRow: (tableName, data) => {
    db.get(tableName).push(data).write();
  },
};

export default productAdb;

const getProductById = productAdb.getProductById;
const addProduct = productAdb.addProduct;
const addTableRow = productAdb.addTableRow;

export { getProductById, addProduct, addTableRow };
