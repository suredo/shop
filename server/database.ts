import mongoose, { Mongoose } from "mongoose";

const db = "mongodb://localhost:27017/dev";

export const connect = async (): Promise<Mongoose> => {
  return await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
