import {Request,Response} from "express";
const login = (req:Request,res:Response) => {
    try {

        return res.send("Login route")
        
    } catch (error) {
        return res.send({message: "Internal Server Error"})
    }

}

export {login}