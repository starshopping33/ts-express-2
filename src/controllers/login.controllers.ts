import { Request, Response } from "express"
import { CreateLogin } from "../schemas/login.schema"
import { createloginservice } from "../services/login.service"

export const createlogincontroller = async(req:Request,res:Response):Promise<Response>=>{

const loginData: CreateLogin  = req.body
const token = await createloginservice(loginData)

return res.status(200).json(token)
}