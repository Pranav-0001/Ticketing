import express from "express";
import { connect } from "./db/config.js";
import dotenv from "dotenv";
import createTicketRouter from './routes/createTicket.js'
dotenv.config()
const app = express();

connect();  
app.use(express.json());
app.use('/api/tickets/create',createTicketRouter)

app.listen(3001, () => {
  console.log("Tickets server started at 3001!!");
});
