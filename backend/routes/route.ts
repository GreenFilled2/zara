import express, { Router } from "express";
import { testController } from "../controllers/controller";

const router: Router = express.Router()

router.get("/", testController)

export default router