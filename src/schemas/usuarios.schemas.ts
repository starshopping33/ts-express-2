import { DeepPartial } from "typeorm"
import {z} from "zod"

export const createUserSchema = z.object({
    name: z.string().min(2,"nome é obrigatório"),
    email: z.string().email(),
    password: z.string(),
    bio: z.string().default("")
})

export const returnUserSchema = createUserSchema.extend({
    id: z.number()
}).omit({password:true})

export const returnAllUsersSchema = returnUserSchema.array()
export  const updatedUserSchema = createUserSchema.partial()


export type CreateUser = z.infer<typeof createUserSchema>
export type ReturnUser = z.infer<typeof returnUserSchema>
export type ReturnUsers = z.infer<typeof returnAllUsersSchema>
export type UpdatedUser = DeepPartial<CreateUser>