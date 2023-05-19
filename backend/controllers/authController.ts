import {Request, Response} from "express"
import { User } from "../models/User"
import bcrypt from "bcrypt"
import jwt, { Secret } from "jsonwebtoken"

const TOKEN = process.env.TOKEN

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({ email });
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
          return res.status(401).json({ error: 'Invalid password' });
        }
    
        const token = jwt.sign({}, TOKEN as Secret);
    
        res.status(200).json({token, name: user.name, email, balance: user.balance, cart: user.cart });
      } catch (error) {
        res.status(500).json(error);
      }
}

export const signup = async (req: Request, res: Response) => {
    try {
        const {email, password, name} = req.body
        console.log(req.body)
        const userExists = await User.findOne({email})
        if (userExists) {
            res.status(409).json({ error: 'Email already in use' })
        }
        const hashedPassword: String = await bcrypt.hash(password, 10)

        const newUser = new User({
            email,
            name,
            password: hashedPassword,
            receivesEmails: false,
            balance: 0,
        })

        await newUser.save()
        const token = jwt.sign({}, TOKEN as Secret)

        res.json({token, name, email, balance: newUser.balance})
    } catch(err) {
        res.status(500).json(err)
    }
}
