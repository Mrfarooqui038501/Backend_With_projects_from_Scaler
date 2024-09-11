const express = require("express")
const productRouter =  express.Router();

const { getAllProducts,
    getProductById,
    updateProductById,
    updateProductByIdPatch,
    deleteProductById,
    createProduct}  = require("../controllers/productController")



productRouter.post("/",createProduct );

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductById);

productRouter.put("/:id", updateProductById);

productRouter.patch("/:id",updateProductByIdPatch);

productRouter.delete("/:id", deleteProductById);

module.exports = productRouter;