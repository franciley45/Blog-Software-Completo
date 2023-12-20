import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";

const app = express();

const port = 3000;


app.use(cors());
app.use(express.json());;

AppDataSource.initialize().then( async () => {
console.log('Database OK')
app.listen(port, () => {
    console.log('Server started on por 3000')
})
})