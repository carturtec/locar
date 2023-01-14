import { parse } from "csv-parse";
import fs from "fs";
 
class ImportCategoryUseCase{
    execute(file: Express.Multer.File): void {
        //fs stream => leitura de arquivo
        const stream = fs.createReadStream(file.path);

        const parseFile = parse();
        
        stream.pipe(parseFile);

        parseFile.on("data", async (line)=>{
            console.log(line);

        });
    }
}

export{ImportCategoryUseCase};