import jwt from "jsonwebtoken";

export const validateToken = (req, res,next) => {
  try {
    const token= req.headers.authentication
    if(!token){
        res.status(403).json({error:'no valid token'})
        return
    }
    console.log({token:token.split(" ")});
    const payload=jwt.verify(token.split(" ")[1],"access")
    
    if(!payload){
        res.json({error:'invalid token'})
        return
    }
    next()
  } catch (error) {
    res.status(500).json({ error });
  }
};
