import { Request, Response } from "express"
import { createUserService } from "../services/createUser.service"
import { getAllUsersService } from "../services/getAllUsers.service"
import { ReturnUser } from "../schemas/usuarios.schemas"
import { usuarioRetrieveService } from "../services/usuarioRetrieve.service"
import { updateUserService } from "../services/updateUser.service"


export const createUserController = async(req:Request,res:Response):Promise<any> =>{
    const userData = req.body
    const user:ReturnUser = await createUserService(userData)
    return  res.status(201).json(user)
    
}
export const getAllUsersController=async(req:Request,res:Response):Promise<any>=>{
    const users = await getAllUsersService()
  
    return res.status(200).json(users)
}
export const usuarioRetrieveController=async(req:Request,res:Response)=>{
   const userId:number = req.user.id
   const user:ReturnUser = await usuarioRetrieveService(userId)
    return res.status(200).json(user)
}

export const UpdatedUserController = async(req:Request,res:Response)=>{
    const userId:number = parseInt(req.params.id)
    const userData = req.body
    const user:ReturnUser = await updateUserService(userData,userId)
    return res.status(200).json(user)
}

export const getUserIdController = async (req: Request, res: Response) => {
    const userId: number = Number(req.params.id)
    const user: ReturnUser = await usuarioRetrieveService(userId);
    return res.status(200).json(user)
}