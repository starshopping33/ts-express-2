import { Repository } from "typeorm";
import { number } from "zod";
import { Usuarios } from "../entities/usuarios.entitie";
import { AppDataSource } from "../data-source";
import { returnUserSchema } from "../schemas/usuarios.schemas";

export const usuarioRetrieveService=async(userId:number)=>{
    const userRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser:Usuarios|null = await userRepository.findOne({
        where:{
            id:userId
        }
    })

    const user = returnUserSchema.parse(findUser)
    return user
}