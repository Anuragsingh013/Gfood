import express, { urlencoded } from "express";
import connectToDb from "./Db/connectToDb.js";

import registerRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js";
import cors from "cors";
import "dotenv/config";
const app = express();

// Add  middleware before defining routes
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "hii from the server " });
});

app.use("/register", registerRoute);
app.use("/login", loginRoute);

connectToDb();
app.listen(process.env.PORT, (req, res) => {
  console.log("server is started");
});
