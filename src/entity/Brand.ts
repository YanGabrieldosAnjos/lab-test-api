import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Brand {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({type: "text", nullable: false, unique: true})
    name!: string;

}
