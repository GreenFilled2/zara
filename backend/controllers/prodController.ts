import { Request, Response } from "express"
import { Product } from "../models/Product"

export const getProducts = async (req: Request, res: Response) => {
    try {
        const { cat, subcat } = req.params
        console.log(cat, subcat)
        const products = await Product.find({ subCategory: subcat })
        console.log(products)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}