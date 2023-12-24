import mongoose from "mongoose";

export const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Ticketing DB Connected successfully");
    })
    .catch((err) =>{
      console.log({ err })
    });
};
