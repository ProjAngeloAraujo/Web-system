import { ImportaController } from "./importa.controller.js";

const importaController = new ImportaController();

document.addEventListener('DOMContentLoaded', () => {
    const importa = document.querySelector('#botao-importa') as HTMLElement;

    if(!importa) {
        throw new Error("Botão de importar não encontrado");
    }

    importa.addEventListener('click', () => {
        importaController.importar();
    })
});