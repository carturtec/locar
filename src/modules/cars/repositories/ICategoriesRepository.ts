import { Category } from "../model/Category";

//DTO - data transfer object
//interface - o que uma classe precisa implementar
interface ICreateCategoryDTO{
    name: string;
    description: string;
}

interface ICategoriesRepository{
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: ICreateCategoryDTO): void;
} 

export{ICategoriesRepository, ICreateCategoryDTO};