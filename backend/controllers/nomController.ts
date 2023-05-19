import { Request, Response } from "express";
import { User } from "../models/User";

export const seeUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find(); 

    console.log('users', users);
    res.json(users);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};