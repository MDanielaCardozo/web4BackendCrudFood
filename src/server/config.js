import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path"
import { fileURLToPath } from "url";

export default class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3001;
        //ejecuta el metodo middlewares
        this.middlewares();
        }
        middlewares() {
            //invocar a una de nuestro objeto (THIS)
            this.app.use(cors()); //permite conexiones remotas cuando lo tengamos en produccion
            this.app.use(express.json()); //permite interpretar los datos que lleguen en la solicitud en formato json
            this.app.use(morgan("dev")) //nos da informacion extra en la terminal

            const __dirname = dirname(fileURLToPath(import.meta.url));
            console.log(__dirname);
            this.app.use(express.static(__dirname + "/../../public"))
            
        }

        listen() {
            this.app.listen(this.port, () => 
            console.info(`El servidor se esta ejecutando en: http:localhost: ${this.port}`))
        }
}