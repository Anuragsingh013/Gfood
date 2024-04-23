import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
async function handleLoginUser(req, res) {
  const { email, password } = req.body;
  try {
    const searchedUser = await User.findOne({ email });
    if (!searchedUser) {
        return res.status(400).json({ msg: "Check your credentials" });
    } else {
      //if searchedUser exsist compare the password he provide
      const passwordMatch = await bcrypt.compare(password, searchedUser.password);
      if (!passwordMatch) {
        return res.status(400).json({ msg: "Check your password" });
      } else {
        res.json({
          msg: "user logged in successfully",
          user: searchedUser,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
export default handleLoginUser;
