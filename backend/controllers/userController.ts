import { Request, Response } from 'express';
import { userSearch } from '../models/userModel';

export const searchUsers = (req: Request, res: Response) => {
  console.log('&&')
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
