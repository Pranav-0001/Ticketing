import { body } from "express-validator";

export const signInVaidationSchema = [
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Enter a valid password"),
];
