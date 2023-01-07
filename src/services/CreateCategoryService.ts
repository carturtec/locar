import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest{
    name: string;
    description: string;
}

//definir o tipo de retorno
//alterar o retorno de erro
//acessar o repositório
//retornar alguma coisa

//classe que cria uma categoria
class CreateCategoryService{
    constructor (private categoriesRepository: CategoriesRepository){}
    execute({name, description}: IRequest): void{
    //pega o que esta em name
    const categoryAlreadyExistis = this.categoriesRepository.findByName(name);
    //se já exestir:
    if(categoryAlreadyExistis){
        //retorna o erro já que a service não precisa ter acesso ao response
        throw new Error("Category Already Exists!");
    }

    this.categoriesRepository.create({name, description});

    }
}

export{CreateCategoryService};