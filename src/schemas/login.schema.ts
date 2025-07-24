import {z} from "zod"
import { returnUserSchema } from "./usuarios.schemas"

export const createLoginschema = z.object({
    
    email: z.string().email(),
    password: z.string().min(4)
})

export const returnLogin = z.object({
    token:z.string(),
    usuario:returnUserSchema
})
export type CreateLogin = z.infer<typeof createLoginschema>
export type ReturnLogin = z.infer<typeof returnLogin>