import { inspect } from "./decorators/inspect.js";
import { LogarTempoDeExecucao } from "./decorators/logar.tempo.execucao.js";


export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor (seletor: string) {
        const elemento = document.querySelector(`#${seletor}`);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Erro ao buscar o elemento ${seletor}, verifique se ele existe no DOM.`);
        }
    }

    @LogarTempoDeExecucao(true)
    @inspect
    update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}