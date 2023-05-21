import Mongoose, { Document, Schema } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  password: string;
  name: string;
  receivesEmails: boolean;
  balance: number;
}

const UserSchema: Schema<UserDocument> = new Schema({
  email: String,
  password: String,
  name: String,
  receivesEmails: Boolean,
  balance: Number,
});

export const User = Mongoose.model<UserDocument>("User", UserSchema);
