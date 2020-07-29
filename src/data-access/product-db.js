const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// Set some defaults
db.defaults({ products: [] }).write();

const productAdb = {
  getProductById: (id) => {
    console.log("id", id)
    let product = db.get("products").find({ id }).value();
    return product;
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
