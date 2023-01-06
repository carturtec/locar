import express, { request } from "express";
import { categoriesRoutes } from "./routes/categories.routes";


//bibliotecas de tipo @types/express
const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3333);