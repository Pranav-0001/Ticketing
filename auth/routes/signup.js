import express from "express";
import { signupVaidationSchema } from "../validationSchema/signupValidationSchema.js";
import { validateRequest } from "../helpers/validateRequest.js";
import { matchedData } from "express-validator";
import bcrypt from "bcrypt";
import userSchema from "../models/userSchema.js";
import jsonwebtoken from "jsonwebtoken";
const router = express.Router();

const signup = async (req, res) => {
  const requestData = matchedData(req);
  try {
    requestData.password = await bcrypt.hash(requestData.password, 10);
    const createdUser = await new userSchema({ ...requestData }).save();
    const token = jsonwebtoken.sign({ sub: { createdUser } }, "access", {
      expiresIn: "7d",
    });
    res
      .status(200)
      .json({ status: true, createdUser, token: `Bearer ${token}` });
  } catch (error) {
    res.send(error);
  }
};
router.post("/", signupVaidationSchema, validateRequest, signup);

export default router;
