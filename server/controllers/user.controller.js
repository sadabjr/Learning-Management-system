import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    // check validation
    const { name, email, password } = req.body; // getting these from body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        error: true,
      });
    }

    // for checking Email already exists with the same email
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email already exists with the same email",
        error: true,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // create a new user with hashed password
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "Account has been created successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to register",
      error: true,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body; // these are get from body
    // check validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        error: true,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password",
        error: true,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
        error: true,
      });
    }
    // generate Token
    generateToken(res, user, `Welcome back ${user.name}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to login",
      error: true,
    });
  }
};

export const logout = async (_, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out Successfully!",
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to Log out!",
      error: true,
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.id;
    const user = await User.findById(userId).select("-password");
    return res.status(200).json({
      success: true,
      message: "User profile fetched successfully!",
      error: false,
      user: req.user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to get user profile!",
      error: true,
    });
  }
};
