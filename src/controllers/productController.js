import makeListProduct from "../use-cases/list-product";
import { makeGetProduct } from "../interface/productService";
import adb from "../data-access/product-db";
export default {
  listProducts: async (req, res) => {
    const getProductbyId = makeGetProduct(adb);
    const listProduct = makeListProduct(getProductbyId);
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
};
