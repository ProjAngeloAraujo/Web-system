import { Cadastro } from "./cadastro.model.js";

export async function CadastroValidate(req: Cadastro) {
    if(!req.nome) {
        throw new Error("Campo nome não preenchido!");
    }
    if(!req.nascimento) {
        throw new Error("Campo nascimento não preenchido!");
    }
    if(!req.idade) {
        throw new Error("Campo idade não preenchido!");
    }
}