import { Cadastro } from "../cadastro/cadastro.model.js";
import { Modelo } from "../utils/models/modelo.js";

export class Cadastros implements Modelo<Cadastros> {
   
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

    public ehIgual(cadastros: Cadastros): boolean {
        return JSON.stringify(this.Cadastros) === JSON.stringify(cadastros);
    }
}