import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("database connected");
    })
    .catch(() => {
      console.log("database not connected");
    });
};
