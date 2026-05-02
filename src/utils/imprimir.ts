import { Imprimivel } from "./models/imprimivel.js";

export function imprimir(...objetos: Imprimivel[]): void {
    for(const objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}