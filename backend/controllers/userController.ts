import { Request, Response } from 'express';
import { userSearch,User } from '../models/userModel';

export const searchUsers = (req: Request, res: Response) => {
  const searchTerm: string = req.query.q as string;

  userSearch(searchTerm, (err: Error | null, results: any) => {
    if (err) {
      console.error('Error searching users:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};
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
