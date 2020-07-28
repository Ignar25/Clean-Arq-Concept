import makeProduct from '../entities/product'
export default async function makeListProduct ({ getProductById }) {
  return async function listProduct () {
    const product = makeProduct({ id: '1', name: 'Toke', description: 'toke', date: new Date() })
    const productDB = await getProductById('1')
    if (productDB.id === product.getId()) {
      return productDB
    }
    throw new Error('Registro Incorrecto')
  }
}