export default function makeListProduct (getProductById) {
  return async function listProduct (id) {
    const productDB = await getProductById(id)
    return productDB;
  }
}
