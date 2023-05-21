import express, { Router } from "express";
import { addToCart, getCart, deleteFromCart } from "../controllers/cartController";

const router: Router = express.Router();

router.get("/:owner", getCart);

router.put("/:owner", addToCart);

router.delete("/:owner/:item", deleteFromCart)

export default router;
