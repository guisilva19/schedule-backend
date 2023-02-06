import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";



@Entity()
class Contact {
    @PrimaryGeneratedColumn('uuid')
    readonly id: Number

    @Column()
    name: String

    @Column()
    email: String

    @Column()
    telephone: String

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, (user) => user.id)
    user_id: User
}

export { Contact }