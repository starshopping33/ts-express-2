
import { returnUserSchema, UpdatedUser } from "../schemas/usuarios.schemas";
import {  Repository } from "typeorm";
import { Usuarios } from "../entities/usuarios.entitie";
import { AppDataSource } from "../data-source";

import { AppError } from "../errors";


export const updateUserService=async(userData:UpdatedUser,userId:number)=>{
    const userRepository: Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser = await userRepository.findOneBy({
        id: userId
    })

    if(!findUser){
        throw new AppError ("usuário não encontrado", 404)
    }
   
    const updateUser:Usuarios = userRepository.create({
        ...findUser,
        ...userData
    })
    await userRepository.save(updateUser)

    const user = returnUserSchema.parse(updateUser)

    return user

}
