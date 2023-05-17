import Mongoose, { Document, Schema } from 'mongoose';

export interface ProductDocument extends Document {
  name: string;
  description: string;
  availableSizes: [string];
  price: number,
  quantity: number,
  category: string,
  subCategory: string,
  variant: string,
  images: [string],
  discount: number,
}

const ProductSchema: Schema<ProductDocument> = new Schema({
  name: String,
  description: String,
  availableSizes: [String],
  price: Number,
  quantity: Number,
  category: String,
  subCategory: String,
  variant: String,
  images: [String],
  discount: Number,
});


export const Product = Mongoose.model<ProductDocument>('Product', ProductSchema);
