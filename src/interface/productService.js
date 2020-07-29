export default function makeGetProduct (adb) {
  return async function getProducts (id) {
    const postProduct = await adb.getProductById(id)
    return postProduct
  }
}
