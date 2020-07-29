const productService = {
  makeGetProduct: (adb) => {
    return async function getProducts(id) {
      const getProduct = await adb(id);
      return getProduct;
    };
  },
  makeGetAddedProduct: (addTableRow) => {
    return async function addProduct(product) {
      const productObj = {
        id: product.getId(),
        name: product.getName(),
        description: product.getDescription(),
        date: product.getDate().getTime(),
      }
      const postProduct = await addTableRow("products", productObj);
      return productObj;
    };
  },
};

export default productService;

const makeGetProduct = productService.makeGetProduct;
const makeGetAddedProduct = productService.makeGetAddedProduct;

export { makeGetProduct, makeGetAddedProduct };
