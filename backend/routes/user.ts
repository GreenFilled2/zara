import express, { Router } from "express";
import { postUser } from "../controllers/userController";

const router: Router = express.Router()

router.post("/ajouter", postUser)



export default router