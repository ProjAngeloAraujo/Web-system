import { Cadastro } from "../cadastro/cadastro.model.js";

export class Cadastros {
   
    private Cadastros: Cadastro[] = [];
    
    public adicionar(cadastro: Cadastro) {
        this.Cadastros.push(cadastro);
        console.log(this.listar());
    }

    public listar(): readonly Cadastro[] {
        return this.Cadastros;
    }
}