
import { Modelo } from "../utils/models/modelo.js";

export class Cadastro implements Modelo<Cadastro> {
    constructor(
        public readonly nome: string, 
        public readonly nascimento: Date, 
        public readonly idade: number
    ) {}

    public static criaDe(_nome: HTMLInputElement, _nascimento: HTMLInputElement, _idade: HTMLInputElement): Cadastro {
        const exp = /-/g;
        const nome = String(_nome.value);
        const nascimento = new Date(_nascimento.value.replace(exp, ','));
        const idade = Number(_idade.value);
        return new Cadastro( nome, nascimento, idade);
    }

    public paraTexto(): string {
        return `
            Nome: ${this.nome},
            Idade: ${this.idade},
            Nascimento: ${this.nascimento}
        `;
    }

    public ehIgual(cadastro: Cadastro): boolean {
        return this.nascimento.getDate() === cadastro.nascimento.getDate()
            && this.nascimento.getMonth() === cadastro.nascimento.getMonth()
            && this.nascimento.getFullYear() === cadastro.nascimento.getFullYear()
    }

}