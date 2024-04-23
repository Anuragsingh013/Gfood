import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
async function createUser(req, res) {
  const { name, email } = req.body;
  try {
    // Check if user already exists with the provided email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }
    // Hash the password asynchronously
    const password = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name,
      email,
      password,
    });
    // Respond with success message
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
}
export default createUser;
