import makeProduct from "../entities/product";
export default function makeAddProduct(productToAdd) {
  return async function addProduct() {
    const product = makeProduct(productToAdd);
    if (product) {
      return product;
    }
    throw new Error("No product to add");
  };
}
