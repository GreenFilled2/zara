import { Request, Response } from "express";
import { Cart } from "../models/Cart";
import { User } from "../models/User";
import { Product } from "../models/Product";

interface CartItem {
  itemId: string;
  quantity: number;
}

export const addToCart = async (req: Request, res: Response) => {
  const { owner } = req.params;
  const { itemId } = req.body;
  // TODO: Calculate total price
  const totalPrice = 3;
  try {
    await Cart.findOneAndUpdate(
      { owner },
      { $push: { items: { itemId, quantity: 1 } }, $set: { totalPrice } }
    );
    res.status(200).send("item added to cart");
  } catch (error) {
    res.json(error);
  }
};

export const getCart = async (req: Request, res: Response) => {
  const { owner } = req.params;
  try {
    const cart = await Cart.findOne({ owner });
    let items = [];
    if (cart) {
      for (const e of cart.items as CartItem[]) {
        const item = await Product.findOne({ _id: e.itemId });
        items.push(item);
      }
    }
    res.status(200).json(items);
  } catch (error) {
    res.json(error);
  }
};

export const deleteFromCart = async (req: Request, res: Response) => {
  const { owner, item } = req.params;
  try {
    const cart = await Cart.findOne({ owner });
    let newItems = cart?.items.filter(
      (e) => (e as CartItem).itemId !== item
    ) as CartItem[];
    await Cart.updateOne({ owner }, { $set: { items: newItems } });
  } catch (error) {
    res.json(error);
  }
};
