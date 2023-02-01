import { DataSource } from "typeorm";
import 'dotenv/config'

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: process.env.PORT,
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
})