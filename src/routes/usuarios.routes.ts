import { Router } from "express";
import { createUserController, getAllUsersController,  getUserIdController,  UpdatedUserController, usuarioRetrieveController } from "../controllers/usuarios.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { createUserSchema, updatedUserSchema } from "../schemas/usuarios.schemas";
import { validateTokenmiddleware } from "../middleware/validatetoken.middleware";

export const usuariosRoutes:Router = Router()

usuariosRoutes.post("",validateDataMiddleware(createUserSchema), createUserController)
usuariosRoutes.get("",getAllUsersController)
usuariosRoutes.get("/retrieve",validateTokenmiddleware,usuarioRetrieveController)
usuariosRoutes.patch("/:id",validateDataMiddleware(updatedUserSchema),validateTokenmiddleware,UpdatedUserController)
usuariosRoutes.get("/:id",getUserIdController )