import { Cadastros } from "../cadastros/cadastros.model";
import { Cadastro } from "./cadastro.model";


export class CadastroView {

    private elemento: HTMLElement;

    constructor (seletor: string) {
        this.elemento = document.querySelector(`#${seletor}`) as HTMLElement;
    }

    template(cadastros: Cadastros): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Nascimento</th>
                        <th>Idade</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        cadastros.listar().map(cadastro => {
                            return `
                                <tr>
                                    <td>
                                        ${cadastro.nome}
                                    </td>
                                    <td>
                                        ${cadastro.nascimento}
                                    </td>
                                    <td>
                                        ${cadastro.idade}
                                    </td>
                                </tr>
                            `;
                        })
                    }
                </tbody>
            </table>
        `;
    }

    update(cadastros: Cadastros): void {
        this.elemento.innerHTML = this.template(cadastros);
    }
}