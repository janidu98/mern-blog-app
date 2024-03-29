import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  //request the username, email and password from the frontend
  const { username, email, password } = req.body;
  
  //check all fields are filled or not
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required!"));
  }
  
  //hash the entered password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("signup success");

  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  //request the email and password from the frontend
  const { email, password } = req.body;
  //check whether email and password are empty or not
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required!"));
  }

  try {
    //check user is valid or not
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "User not found"));
    }

    //check password is correct or not
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Password"));
    }

    //create jwt webtoken
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    //remove the password from result
    const {password: pass, ...rest} = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);

  } catch (error) {
    next(error);
  }
};
