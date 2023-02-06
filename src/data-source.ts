import { DataSource } from "typeorm";
import 'dotenv/config'



export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'fullstack',
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    logging: false
})

