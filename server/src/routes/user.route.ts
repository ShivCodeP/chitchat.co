import express from "express";
import { login, register,allUsers } from "../controllers";
import { authenticateLogin } from "../middlewares";

const userrouter = express.Router();

userrouter.post("/login",login);
userrouter.post("/register",register);
userrouter.get("/allusers",authenticateLogin,allUsers)

export default userrouter;