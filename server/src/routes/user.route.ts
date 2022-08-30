import express from "express";
import { login, register } from "../controllers";

const userrouter = express.Router();

userrouter.post("/login",login);
userrouter.post("/register",register);

export default userrouter;