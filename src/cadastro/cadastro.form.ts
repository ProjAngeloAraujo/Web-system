declare const Swal: any;
import { CadastroController } from "./cadastro.controller.js";
import { CadastroValidate } from "./cadastro.validate.js";
import { Cadastro } from "./cadastro.model.js";

document.addEventListener("DOMContentLoaded", () => {

  const cadastroController = new CadastroController();
  const form = document.querySelector("#formCadastro") as HTMLFormElement;

    if (!form) {
        console.error("Form não encontrado");
        return;
    }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {

      const req = Cadastro.criaDe(cadastroController._nome, cadastroController._nascimento, cadastroController._idade);

      await CadastroValidate(req);

      const response = await cadastroController.cadastro(req);

    } catch (err) {
      Swal.fire("Erro no cadastro!", `${err}`, "error");
    }
  });
});
