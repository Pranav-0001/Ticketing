import { body, param } from "express-validator";

export const updateTicketValidationSchema = [
  param("id").isString().withMessage("Inavlid Entry"),
  body("title").isString().withMessage("title is required"),
  body("price").isNumeric().withMessage("price should be a number"),
  body("userId").isString(),
];
