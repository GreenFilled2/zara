import express, { Router } from "express";
import { seeUser } from "../controllers/nomController";

const router: Router = express.Router()

router.post("/compte", seeUser)



export default router