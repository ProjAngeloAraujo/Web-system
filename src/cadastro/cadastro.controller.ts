import { Cadastro } from "./cadastro.model.js";
import { CadastroService } from "./cadastro.service.js";

export class CadastroController {

    public readonly _nome: HTMLInputElement | null;
    public readonly _nascimento: HTMLInputElement | null;
    public readonly _idade: HTMLInputElement | null
    private cadastroService = new CadastroService();

    constructor (
    ) {
        this._nome = document.querySelector('#nome');
        this._nascimento = document.querySelector('#data');
        this._idade = document.querySelector('#idade');
    }

    async cadastro(req: Cadastro) {
        const response = this.cadastroService.cadastrar(req);
        return response;
    }

    criarCadastro(): Cadastro {
        const exp = /-/g;
        const nome = String(this._nome?.value);
        const nascimento = this._nascimento ? new Date(this._nascimento?.value.replace(exp, ',')) : null;
        const idade = Number(this._idade?.value);
        return { nome, nascimento, idade };
    }
    
}