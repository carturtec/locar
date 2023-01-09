import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
 
categoriesRoutes.post("/", (request, response)=>{
    //recebe a requisição
    const {name, description} = request.body;
    //chama o service
    const createCategoryService = new CreateCategoryService(categoriesRepository);
    //executa e dar o retorno
    createCategoryService.execute({name, description});

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response)=>{
    const all = categoriesRepository.list();

    return response.json(all);
});

export {categoriesRoutes};