import {Request, Response} from "express"

export const testController = async (req: Request, res: Response) => {
    res.send("Response from router")
}
