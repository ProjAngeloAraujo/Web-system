export class Cadastro {
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

}