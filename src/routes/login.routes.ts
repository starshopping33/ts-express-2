import { Router } from "express"

import { validateDataMiddleware } from "../middleware/validateData.middleware"
import { createUserSchema } from "../schemas/usuarios.schemas"
import { createLoginschema } from "../schemas/login.schema"
import { createlogincontroller } from "../controllers/login.controllers"

export const loginRoutes = Router()
loginRoutes.post("",validateDataMiddleware(createLoginschema),createlogincontroller)



