const productAdb = {
  getProductById: () => {
    return {
      id: "1",
      name: "Toke",
      description: "tokeaaaaa",
      date: new Date().setTime(1596033494),
    };
  },
  addProduct: (product) => {
    return product
  },
};

export default productAdb;

const getProductById = productAdb.getProductById;
const addProduct = productAdb.addProduct;

export { getProductById, addProduct };
