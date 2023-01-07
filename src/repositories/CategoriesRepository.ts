import { Category } from "../model/Category";

//DTO - data transfer object
interface ICreateCategoryDTO{
    name: string;
    description: string;
}

class CategoriesRepository {

    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    create({name, description}: ICreateCategoryDTO): void{
    //chama o construtor e passa os atributos
    const category = new Category();

    Object.assign(category, {
        name,
        description,
        created_at: new Date(),
    });
    //this pega o atributo da classe
    this.categories.push(category);
    }
    //retorna no nossa lita de categories, 
    list(): Category[]{
        return this.categories;
    }
    //verificar se já existe uma categoria nome que não seja duplicado
    findByName(name: string): Category{
        const category = this.categories.find((category) => category.name === name);
        return category;
    }

}

export {CategoriesRepository };