import express, { Router } from "express";
import { Request, Response } from "express";
import { searchUsers } from "../controllers/userController";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

router.get("/users/search", searchUsers);

export default router;
