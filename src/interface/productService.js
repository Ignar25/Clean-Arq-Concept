const productService = {
  makeGetProduct: (adb) => {
    return async function getProducts(id) {
      const getProduct = await adb(id);
      return getProduct;
    };
  },
  makeGetAddedProduct: (adb) => {
    return async function addProduct(product) {
      const postProduct = await adb(product);
      const productObj = {
        id: postProduct.getId(),
        name: postProduct.getName(),
        description: postProduct.getDescription(),
        date: postProduct.getDate(),
      }
      return productObj;
    };
  },
};

export default productService;

const makeGetProduct = productService.makeGetProduct;
const makeGetAddedProduct = productService.makeGetAddedProduct;

export { makeGetProduct, makeGetAddedProduct };
