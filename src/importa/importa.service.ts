import { Cadastro } from "../cadastro/cadastro.model.js";
import type { DadoImportado } from "./importa.model.js";

export class ImportaService {

    public getImportar(): Promise<DadoImportado[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: DadoImportado[]) => {
                return dados.map(dado => {
                    return new Cadastro(
                        dado.nome,
                        dado.nascimento,
                        dado.idade
                    )
                })
            })
    }

}