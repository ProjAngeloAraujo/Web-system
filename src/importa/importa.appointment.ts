import { CadastroController } from "../cadastro/cadastro.controller.js";
import { ImportaService } from "./importa.service.js";

export class ImportaAppointment {

    private importaService = new ImportaService();
    private cadastroController = new CadastroController();

    public importar(): void {
        this.importaService.getImportar()
        .then(dadosImportados => {
            for (const dadoImportado of dadosImportados) {
                this.cadastroController.cadastro(dadoImportado);
            }
        })
    }
}