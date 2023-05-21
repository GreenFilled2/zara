import Mongoose, { Document, Schema } from 'mongoose';

export interface CartDocument extends Document {
    owner: string;
    items: object[];
    totalPrice: number,
}

const CartSchema: Schema<CartDocument> = new Schema({
    owner: String,
    items: Array,
    totalPrice: Number,
});


export const Cart = Mongoose.model<CartDocument>('Cart', CartSchema);
