declare const Swal: any;
import { CadastroController } from "./cadastro.controller.js";
import { CadastroValidate } from "./cadastro.validate.js";

document.addEventListener("DOMContentLoaded", () => {

  const cadastroController = new CadastroController();
  const form = document.querySelector("#formCadastro") as HTMLFormElement;

    if (!form) {
        console.error("Form não encontrado");
        return;
    }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const req = cadastroController.criarCadastro();

    await Swal.fire({
        title: "Iniciando processo de cadastro!",
        text: "Processando...",
        icon: "info",
        timer: 2000,
        showConfirmButton: false
    });

    try {

      await CadastroValidate(req);

      const response = await cadastroController.cadastro(req);

    } catch (err) {
      Swal.fire("Erro no cadastro!", `${err}`, "error");
    }
  });
});
