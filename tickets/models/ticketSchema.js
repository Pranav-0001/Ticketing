import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TicketSchema = mongoose.model("Ticket", ticketSchema);

export { TicketSchema };
