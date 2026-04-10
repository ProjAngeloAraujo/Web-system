import { Cadastros } from "../cadastros/cadastros.model.js";
import { Cadastro } from "./cadastro.model.js";

export class CadastroService {
    async cadastrar(req: Cadastro) {
        if(!req) {
            throw new Error("Dados do cadastro não recebido!");
        }

        
    }
}

