import express from "express";
import bodyParser from "body-parser";
import productController from "./controllers/productController";

const app = express();
app.use(bodyParser.json());
// TODO: figure out DNT compliance.
app.use((_, res, next) => {
  res.set({ Tk: "!" });
  next();
});
app.get("/products", productController.listProducts);
app.post("/products", productController.addProduct);

// listen for requests
app.listen(3048, () => {
  console.log("Server is listening on port 3048");
});

export default app;
