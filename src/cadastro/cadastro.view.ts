import { Cadastros } from "../cadastros/cadastros.model.js";
import { View } from "../utils/View.js";
import { Cadastro } from "./cadastro.model.js";


export class CadastroView extends View<Cadastros> {

    protected template(cadastros: Cadastros): string {
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
                                        ${this.formatar(cadastro.nascimento)}
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

    private formatar(data: Date): string {
        const dataObjeto = data instanceof Date ? data : new Date(data);

        if (isNaN(dataObjeto.getTime())) {
            return 'Data inválida';
        }

        return new Intl.DateTimeFormat().format(dataObjeto);
    }
}