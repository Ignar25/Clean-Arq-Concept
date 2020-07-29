import makeListProduct from "../use-cases/list-product";
import makeAddProduct from "../use-cases/add-product";
import {
  makeGetProduct,
  makeGetAddedProduct,
} from "../interface/productService";
import { getProductById, addTableRow } from "../data-access/product-db";
export default {
  listProducts: async (req, res) => {
    const getProductsbyId = makeGetProduct(getProductById);
    const listProduct = makeListProduct(getProductsbyId);
    try {
      const result = await listProduct();
      res.send(result);
    } catch (error) {
      console.log(JSON.stringify(error.stack));
      res.status(500).send({
        message: "Error",
        error,
      });
    }
  },
  addProduct: async (req, res) => {
    const body = req.body;
    const createProduct = makeGetAddedProduct(addTableRow);
    const addProduct = makeAddProduct(createProduct);
    try {
      const result = await addProduct(req.body);
      res.send(result);
    } catch (error) {
      console.log(JSON.stringify(error.stack));
      res.send(500).send({
        message: "Error",
        error,
      });
    }
  },
};
