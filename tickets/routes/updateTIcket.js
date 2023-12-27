import express from "express";
import { validateRequest } from "../helpers/validateRequest.js";
import { matchedData } from "express-validator";
import { TicketSchema } from "../models/ticketSchema.js";
import { validateToken } from "../helpers/validateToken.js";
import { updateTicketValidationSchema } from "../validationSchema/updateTicketValidationSchema.js";
const router = express.Router();

const updateTicket = async (req, res) => {
  try {
    const requestData = matchedData(req);
    const { id, ...data } = requestData;
    console.log({ data });
    const ticket = await TicketSchema.findOneAndUpdate(
      { _id: id },
      { ...data },
      { new: true }
    );
    res.json({ ticket });
  } catch (error) {}
};

router.post(
  "/:id",
  updateTicketValidationSchema,
  validateToken,
  validateRequest,
  updateTicket
);

export default router;
