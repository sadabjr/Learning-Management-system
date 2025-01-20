import { error } from "console";
import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // to check the user is authenticated or not
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized user",
        success: false,
        error: true,
      });
    }

    // verify the token
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);

    next();
    if (!decoded) {
      return res.status(401).json({
        message: "invalid token",
        success: false,
        error: true,
      });
    }
    // passing user id into id variable
    req.id = decoded.userId;
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to authenticate",
      error: true,
    });
  }
};


export default isAuthenticated;