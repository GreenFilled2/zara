import express, { Router } from "express";
import { getProducts } from "../controllers/prodController";

const router: Router = express.Router()

router.get("/:cat/:subcat", getProducts)

export default router