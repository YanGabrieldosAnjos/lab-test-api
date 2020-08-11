import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable} from "typeorm";
import { Brand } from "./Brand";
import { Model } from "./Model";

@Entity()
export class Vehicle {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({type: "text", nullable: false})
    value!: string;

    @Column({type: "text", nullable: false})
    yearModel!: string;

    @Column({type: "text", nullable: false})
    fuel!: string;
    
    @ManyToOne(type => Brand, {cascade: true})
    brand!: Brand

    @ManyToOne(type => Model, {cascade: true})
    model!: Model
}