import 'express-async-errors'
import express, { Application } from "express"
import { usuariosRoutes } from "./routes/usuarios.routes"
import { handleErrors } from "./errors"
import { loginRoutes } from './routes/login.routes'
import cors from "cors"
import { postsRoutes } from './routes/posts.routes'

const app:Application = express()

app.use(cors())
app.use(express.json())
app.use("/usuarios",usuariosRoutes)
app.use("/login",loginRoutes)
app.use("/posts",postsRoutes)
app.use(handleErrors)
export default app