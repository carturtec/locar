import { Response, Request, response } from "express";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase){}

    handle(request: Request, response: Response){
        const {name, description} = request.body;

        this.createCategoryUseCase.execute({name, description});

        return response.status(201).send();

    }
    
  }

  export {CreateCategoryController};