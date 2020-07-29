const productService = {
  makeGetProduct: (adb) => {
    return async function getProducts (id) {
      const postProduct = await adb.getProductById(id)
      return postProduct
    }
  }
};

export default productService;

const makeGetProduct = productService.makeGetProduct;

export {makeGetProduct}
