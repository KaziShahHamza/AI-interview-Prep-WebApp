import jwt from "jsonwebtoken";
import User from "../model/User.js";

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1];
      console.log(token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } else {
      res.status(401).json({ message: "User not authorized" });
    }
  } catch (error) {
    res
      .status(401)
      .json({ message: "Token validation failed", error: error.message });
  }
};

export { protect };
