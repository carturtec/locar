import { ICreateSpecificationDTO } from "../ISpecificationsRepository";
import { ISpecificationsRepository } from "../ISpecificationsRepository";
import { Specification } from "../../model/Specification";

class SpecificationsRepository implements ISpecificationsRepository{
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({name, description}: ICreateSpecificationDTO): void{
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: Date(),
        });

        this.specifications.push(specification);
      }
      //varifica se existe especificação com mesmo nome
      findByName(name: string): Specification{
        const specification = this.specifications.find(
        (specification) => specification.name === name
        );
        return specification; 

      }
    }
export {SpecificationsRepository};