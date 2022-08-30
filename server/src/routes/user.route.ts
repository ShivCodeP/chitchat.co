import express from "express";
import { login } from "../controllers";

const userrouter = express.Router();

userrouter.get("/login",login)

export default userrouter;