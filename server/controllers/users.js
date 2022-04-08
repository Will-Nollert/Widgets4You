import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import user from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const exsistingUser = await user.findOne({ email });
    if (!exsistingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      exsistingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ message: "invalid credentials." });

    const token = jwt.sign(
      { email: exsistingUser.email, id: exsistingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: exsistingUser, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong. please try again." });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const exsistingUser = await user.findOne({ email });
    if (exsistingUser)
      return res.status(404).json({ message: "User already exist" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await user.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong. please try again." });
  }
};

export const getUsers = async (req, res) => {
  try {
    const productItems = await user.find();
    //console.log(productItem);
    res.status(200).json(productItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
