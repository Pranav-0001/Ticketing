import { body } from "express-validator";

export const signupVaidationSchema = [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Password must be between 4 to 20 characteres"),
];
