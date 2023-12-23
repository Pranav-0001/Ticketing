import express from "express";
const router = express.Router();
import jsonwebtoken from "jsonwebtoken";

router.get("/", (req, res) => {
  try {
    const jwt = req.headers["authentication"];
    const payload = jsonwebtoken.verify(jwt.split(" ")[1], "access");
    console.log({ payload });
    res.json({ status: true, user: payload.sub?.user });
  } catch (error) {
    res.json({ error });
  }
});

export default router;
