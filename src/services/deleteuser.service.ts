import { Repository } from "typeorm"
import { Usuarios } from "../entities/usuarios.entitie"
import { AppDataSource } from "../data-source"
import { AppError } from "../errors"

export const deleteUserservice = async(userid: number):Promise<void>=>{

const userRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)
  const findUser = await userRepository.findOneBy({
    id: userid
  })
  if(!findUser){
    throw new AppError ("usuário não encontrado", 404)
    
  }

  await userRepository.remove(findUser)




}