import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {getRounds,hashSync} from "bcryptjs"
import { Usuarios } from "./usuarios.entitie";
@Entity("posts")
export class Posts {
    @PrimaryGeneratedColumn("increment")
    id: number

    
    @Column()
    title: string

    @Column()
    content: string

    @ManyToOne(()=>Usuarios)
    usuario:Usuarios

    

}