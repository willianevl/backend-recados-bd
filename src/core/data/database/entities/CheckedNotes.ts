import {BaseEntity, BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { User } from "./User";

@Entity()
export class CheckedNotes extends BaseEntity {
    @PrimaryColumn({name: "id"})
    id?: string;

    @Column({name: "title"})
    title: string;

    @Column({name: "description"})
    description: string;

    @Column({name: "user_id"})
    userID: string;

    @Column({name: "date"})
    date?: Date;

    @ManyToOne(() => User, user => user.notes)
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    user?: User;

    constructor(title: string, description: string, userID: string){
        super();
        this.userID = userID;
        this.title = title;
        this.description = description;
    }

    @BeforeInsert()
    createPrimaryKey(){
        this.id = uuidv4();
        this.date = new Date();
    }
}
