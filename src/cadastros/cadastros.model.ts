import { Cadastro } from "../cadastro/cadastro.model.js";
import { Imprimivel } from "../utils/imprimivel.js";

export class Cadastros implements Imprimivel {
   
    private Cadastros: Cadastro[] = [];
    
    public adicionar(cadastro: Cadastro) {
        this.Cadastros.push(cadastro);
        console.log(this.listar());
    }

    public listar(): readonly Cadastro[] {
        return this.Cadastros;
    }

    public paraTexto(): string {
        return JSON.stringify(this.Cadastros, null, 2)
    }
}