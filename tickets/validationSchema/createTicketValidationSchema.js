import { body } from "express-validator";

export const createTicketValidationSchema = [
  body("title").isString().withMessage("title is required"),
  body("price").isNumeric().withMessage("price should be a number"),
  body("userId").isString(),
];
