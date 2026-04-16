import { Cadastros } from "../cadastros/cadastros.model.js";
import { MensagemView } from "../mensagem/mensagem.view.js";
import { DiaSemana } from "../utils/Enums.js";
import { Cadastro } from "./cadastro.model.js";
import { CadastroService } from "./cadastro.service.js";
import { CadastroView } from "./cadastro.view.js";

export class CadastroController {

    public readonly _nome:  HTMLInputElement;
    public readonly _nascimento: HTMLInputElement;
    public readonly _idade: HTMLInputElement;
    private cadastroService = new CadastroService();
    private cadastroView = new CadastroView('cadastros');
    private cadastros = new Cadastros();
    private mensagemView = new MensagemView('mensagem');

    constructor (
    ) {
        this._nome = document.querySelector('#nome') as HTMLInputElement;
        this._nascimento = document.querySelector('#data') as HTMLInputElement;
        this._idade = document.querySelector('#idade') as HTMLInputElement;
        this.cadastroView.update(this.cadastros);
    }

    public async cadastro(req: Cadastro) {
        // const response = this.cadastroService.cadastrar(req);
        if(!this.ehDiaUtil(req.nascimento)) {
            this.mensagemView.update('A pessoa não nasceu em um dia util!')
            return;
        };
        this.cadastros.adicionar(req);
        this.updateView();
        this.limparFormulario();
    }

    public criarCadastro(): Cadastro {
        const exp = /-/g;
        const nome = String(this._nome.value);
        const nascimento = new Date(this._nascimento.value.replace(exp, ','));
        const idade = Number(this._idade?.value);
        return new Cadastro( nome, nascimento, idade);
    }

    private limparFormulario(): void {
        this._nome.value = "";
        this._nascimento.value = "";
        this._idade.value = "";
    }

    private updateView(): void {
        this.cadastroView.update(this.cadastros);
        this.mensagemView.update('Cadastro realizado com sucesso');
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiaSemana.DOMINGO && data.getDay() < DiaSemana.SABADO;
    }
    
}