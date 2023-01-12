import express, { request } from "express";
import { router } from "./routes";

//bibliotecas de tipo @types/express
const app = express();

app.use(express.json());

app.use(router);

app.listen(3333);