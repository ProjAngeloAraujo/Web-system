import { Cadastro } from "../cadastro/cadastro.model.js";
import type { DadoImportado } from "./importa.model.js";

export class ImportaService {

    public getImportar(): Promise<Cadastro[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: DadoImportado[]) => {
                return dados.map(dado => {
                    return new Cadastro(
                        dado.nome,
                        new Date(dado.nascimento),
                        dado.idade
                    )
                })
            })
    }

}