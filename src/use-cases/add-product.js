import makeProduct from "../entities/product";
export default function makeAddProduct(createProduct) {
  return async function addProduct(jsonProduct) {
    const product = makeProduct(jsonProduct);
    if (product) {
      return createProduct(product);
    }
    throw new Error("No product to add");
  };
}
