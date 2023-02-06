import { DataSource } from "typeorm";
import 'dotenv/config'



export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    logging: false
})

