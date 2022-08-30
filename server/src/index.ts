import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Connect } from "./configs";
import { userRoutes } from "./routes";

const app = express();

app.use("/",(req,res) => {
    res.send("hello world")
})

app.use("/auth/user",userRoutes)

app.listen(3000,async() => {
    try {
        await Connect()
        console.log("Server is listening on port 3000")
    } catch (error) {
        console.log(error)
    }
})