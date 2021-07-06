import {BaseEntity, BeforeInsert, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Notes } from "./Notes";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn({name: "id"})
    id?: string;

    @Column({name: "username"})
    username: string;

    @Column({name: "password"})
    password: string;

    @OneToMany(() => Notes, notes => notes.user)
    notes?: Notes[];

    constructor(username: string, password: string, confirmPassword: string){
        super();
        this.username = username;
        this.password = password;
        confirmPassword;
    }

    @BeforeInsert()
    createPrimaryKey(){
        this.id = uuidv4()
    }
}
