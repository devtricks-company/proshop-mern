import jwt from "jsonwebtoken";
import User from "../models/userModel.js"
export const protect = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decode = token.startsWith("Bearer");
    if (decode) {
      const realToken = token.split(" ")[1];
      try {
        const userToken = jwt.verify(realToken, process.env.SECRET_KEY);
       
        const user = await User.findById(userToken.id).select('-password');
        
         req.user = user;   
        next();
      } catch (error) {
        res.status(401);
        throw new Error("token is not valid");
      }
    }
  } else {
    res.status(401);
    throw new Error("token not exist");
  }
};
