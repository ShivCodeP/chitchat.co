import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Connect } from "./configs";
import { userRoutes } from "./routes";

const app = express();

app.use("/", (req, res) => {
  res.send("hello world");
});

app.use("/auth/user", userRoutes);

const Port = process.env.PORT || 5000;
app.listen(Port, async () => {
  try {
    await Connect();
    console.log(`Server is listening on port ${Port}`);
  } catch (error) {
    console.log(error);
  }
});
