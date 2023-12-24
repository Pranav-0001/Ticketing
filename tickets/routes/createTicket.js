import express from "express";
import { createTicketValidationSchema } from "../validationSchema/createTicketValidationSchema.js";
import { validateRequest } from "../helpers/validateRequest.js";
import { matchedData } from "express-validator";
import { TicketSchema } from "../models/ticketSchema.js";
import { validateToken } from "../helpers/validateToken.js";
const router = express.Router();

const createTicket = async (req, res) => {
  try {
    const requestData = matchedData(req);
    console.log({ requestData });
    const ticket = await new TicketSchema({ ...requestData }).save();
    res.json({ ticket });
  } catch (error) {}
};

router.post(
  "/",
  createTicketValidationSchema,
  validateToken,
  validateRequest,
  createTicket
);

export default router;
