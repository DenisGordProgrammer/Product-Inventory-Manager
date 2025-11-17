import express from "express";
import {
  getProducts,
  createProduct,
  editProduct,
  removeProduct,
  exportCSV
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);        
router.post("/", createProduct);      
router.put("/:id", editProduct);      
router.delete("/:id", removeProduct); 
router.get("/export/csv", exportCSV);

export default router;
