import { CadastroController } from "../cadastro/cadastro.controller.js";
import { Cadastro } from "../cadastro/cadastro.model.js";
import { Cadastros } from "../cadastros/cadastros.model.js";
import { ImportaService } from "./importa.service.js";

export class ImportaAppointment {

    private importaService = new ImportaService();
    private cadastroController = new CadastroController();

    public importar(): void {
        this.importaService.getImportar()
        .then(dadosImportados => {
            return dadosImportados.filter(dadosImportados => {
                return !this.cadastroController.cadastros
                    .listar()
                    .some(cadastro => cadastro
                        .ehIgual(dadosImportados)
                    )
            })
        })
        .then(dadosImportados => {
            for (const dadoImportado of dadosImportados) {
                this.cadastroController.cadastro(dadoImportado);
            }
        })
    }
}