import {Request, Response, NextFunction} from "express"
import jwt, { Secret } from 'jsonwebtoken'

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    try {
        if (!token) {
            return res.status(401).send("Unauthorized");
        }
    
        jwt.verify(token, process.env.TOKEN as Secret);
        next()
    } catch (error) {
        res.status(500).json(error)
    }
}