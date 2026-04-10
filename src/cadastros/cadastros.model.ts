import { Cadastro } from "../cadastro/cadastro.model.js";

export class Cadastros {
   
    private Cadastros: Cadastro[] = [];
    
    adicionar(cadastro: Cadastro) {
        this.Cadastros.push(cadastro);
        console.log(this.listar());
    }

    listar(): readonly Cadastro[] {
        return this.Cadastros;
    }
}