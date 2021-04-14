import { Document, model, Schema } from "mongoose";

interface IProduct extends Document {
  product: string;
  imageUrl: string;
  price: number;
}

const Product = new Schema(
  {
    product: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

export default model<IProduct>("Product", Product);
