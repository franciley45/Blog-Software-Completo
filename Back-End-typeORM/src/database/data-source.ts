import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { SeederOptions } from "typeorm-extension"
import User from "../entities/User"
import Post from "../entities/Post"
import { UserSeed1703097680421 } from "./seeds/1703097680421-UserSeed"
import { PostsSeed1703098125058 } from "./seeds/1703098125058-PostsSeed"

require('dotenv').config()


const options: DataSourceOptions & SeederOptions = {
    type: "mysql",
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME_MYSQL,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Post],
    migrations: ["./migrations/*.ts"],
    seeds: [UserSeed1703097680421, PostsSeed1703098125058],
    subscribers: []
}

export const AppDataSource = new DataSource(options)