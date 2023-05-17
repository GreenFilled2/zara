import express, { Router } from "express";
import { getProducts } from "../controllers/prodController";

const router: Router = express.Router()

router.get("/category/:cat/:subcat/:variant", getProducts)

export default router