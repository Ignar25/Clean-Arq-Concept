import makeProduct from '../entities/product'
export default function makeListProduct (getProductById) {
  return async function listProduct () {
    const product = makeProduct({ id: '1', name: 'Toke', description: 'qweqwe', date: new Date() })
    const productDB = await getProductById('1')
    if (productDB.id === product.getId()) {
      return productDB
    }
    throw new Error('Registro Incorrecto')
  }
}
