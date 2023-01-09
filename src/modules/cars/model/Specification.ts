import { v4 as uuidV4} from "uuid";

class Specification{
    id?: string;
    name: string;
    description: string;
    created_at: Date;

//o constructor faz com que a rota pegue o mesmo id quando for atualizar algo na rota
constructor() {
    if(!this.id){
        this.id = uuidV4();

    }
  }

}

export{Specification};
 