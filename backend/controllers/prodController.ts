import {Request, Response} from "express"
import { Product } from "../models/Product"

export const getProducts = async (req: Request, res: Response) => {
    try {
        const {cat, subcat, variant} = req.params

        const products = await Product.find({subCategory: subcat})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}