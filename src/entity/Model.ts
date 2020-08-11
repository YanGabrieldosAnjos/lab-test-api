import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable} from "typeorm";
import { Brand } from "./Brand";

@Entity()
export class Model {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({type: "text", nullable: false, unique: true})
    name!: string;

    @ManyToOne(type => Brand, {cascade: true})
    brand!: Brand

}