import { Repository } from "typeorm";
import { CreateLogin, ReturnLogin } from "../schemas/login.schema";
import { Usuarios } from "../entities/usuarios.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";
import {compare} from "bcryptjs"

export const createloginservice=async(loginData:CreateLogin):Promise<ReturnLogin>=>{

  const userRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

  const user = await userRepository.findOneBy({
    email: loginData.email
  })
  if(!user){
    throw new AppError("email ou password inválidos",401)
  }

  const passvalidate = await  compare(loginData.password, user.password)
  
  if(!passvalidate){
    throw new AppError("email ou password inválidos",401)
  }

  const token = jwt.sign({
    id:user.id,
    email: user.email

  },
  process.env.SECRET_KEY!,
  {
     expiresIn:"24h",
            subject:String(user.id)
  }
)
return {usuario:user,token}
}


