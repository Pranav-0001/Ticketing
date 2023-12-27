import express from "express";
import currentUserRouter from "./routes/currentUser.js";
import signinRouter from "./routes/signin.js";
import signoutRouter from "./routes/signout.js";
import signUpRouter from "./routes/signup.js";
import { connect } from "./db/config.js";
import dotenv from "dotenv";



const app = express();
app.use(express.json());
dotenv.config();
connect();

app.use("/api/users/currentUser", currentUserRouter);
app.use("/api/users/signin" ,signinRouter);
app.use("/api/users/signout", signoutRouter);
app.use("/api/users/signup", signUpRouter);

app.listen(3000, () => {
  console.log("auth server started at 3000!!");
});
