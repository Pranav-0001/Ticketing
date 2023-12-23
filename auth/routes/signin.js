import express from "express";
import { signInVaidationSchema } from "../validationSchema/signinValidationSchema.js";
import { validateRequest } from "../helpers/validateRequest.js";
import { matchedData } from "express-validator";
import bcrypt from "bcrypt";
import userSchema from "../models/userSchema.js";
import jsonwebtoken from "jsonwebtoken";
const router = express.Router();

const signIn = async (req, res) => {
  const requestData = matchedData(req);
  try {
    const user = await userSchema.findOne({ email: "pranav@gamil.com" });
    if (user) {
      const validPassword = await bcrypt.compare(
        requestData.password,
        user.password
      );

      if (!validPassword) {
        res.json({ error: "invalid password", field: "password" });
      } else {
        const token = jsonwebtoken.sign({ sub: { user } }, "access", {
          expiresIn: "7d",
        });
        console.log({token});
        res.status(200).json({ status: true, user, token: `Bearer ${token}` });
      }
    } else {
      res.json({ error: "invalid email", field: "email" });
    }
  } catch (error) {
    res.send({error});
  }
};
router.post("/", signInVaidationSchema, validateRequest, signIn);

export default router;
