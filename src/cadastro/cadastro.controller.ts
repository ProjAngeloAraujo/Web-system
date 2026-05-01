import { Cadastros } from "../cadastros/cadastros.model.js";
import { MensagemView } from "../mensagem/mensagem.view.js";
import { domInjector } from "../utils/decorators/dom.injector.js";
import { LogarTempoDeExecucao } from "../utils/decorators/logar.tempo.execucao.js";
import { DiaSemana } from "../utils/Enums.js";
import { Cadastro } from "./cadastro.model.js";
import { CadastroService } from "./cadastro.service.js";
import { CadastroView } from "./cadastro.view.js";

export class CadastroController {

    @domInjector('#nome')
    public readonly _nome!:  HTMLInputElement;
    @domInjector('#data')
    public readonly _nascimento!: HTMLInputElement;
    @domInjector('#idade')
    public readonly _idade!: HTMLInputElement;
    
    private cadastroService = new CadastroService();
    private cadastroView = new CadastroView('cadastros');
    private cadastros = new Cadastros();
    private mensagemView = new MensagemView('mensagem');

    constructor () {
        this.cadastroView.update(this.cadastros);
    }

    @LogarTempoDeExecucao()
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