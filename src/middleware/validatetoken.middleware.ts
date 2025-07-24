import { NextFunction, Request, Response } from "express";
import  Jwt  from "jsonwebtoken";
import { AppError } from "../errors";

export const validateTokenmiddleware = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    let token = req.headers.authorization
    
    if(!token){
        throw new AppError("token invalido",401)
}
token = token.split(" ")[1]
console.log(token,"token:")
Jwt.verify(token,process.env.SECRET_KEY!,async(error,decoded:any)=>{
    if(error){
        throw new AppError(error.message,401)
    }

     req.user = {
            id: decoded.id,
           email: decoded.email
        }
        console.log(decoded,"decoded")
        
        return next()
})


}