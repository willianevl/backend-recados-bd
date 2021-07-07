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
    date?: string;

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
        let newDate = new Date()
        let date = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`

        this.id = uuidv4();
        this.date = date;
    }
}
