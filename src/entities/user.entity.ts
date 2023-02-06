import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entity";
import { Exclude } from "class-transformer";


@Entity()
class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: Number

    @Column()
    name: String

    @Column()
    email: String

    @Column()
    @Exclude()
    password: String

    @Column()
    telephone: String

    @Column({ default: true })
    is_active: Boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Contact, contact => contact.user_id)
    contact: Contact[]
}

export { User }