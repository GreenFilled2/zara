import { Request, Response } from "express";
import { User } from "../models/User";

export const postUser = async (req: Request, res: Response) => {
  try {
    const user= req.body;
    console.log('Creating user', user);

    const createdUser = await User.create({
      name: user.name,
      adresse: user.adresse,
      
    });

    res.status(200).send(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
