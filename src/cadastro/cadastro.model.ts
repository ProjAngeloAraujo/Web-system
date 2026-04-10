export class Cadastro {
    constructor(
        public readonly nome: string, 
        public readonly nascimento: Date | null, 
        public readonly idade: number | null
    ) {}


}