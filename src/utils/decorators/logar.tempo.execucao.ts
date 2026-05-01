export function LogarTempoDeExecucao(isSegundos: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        let divisor = 1;
        let nomeclatura = 'milesegundos';
        if(isSegundos) {
            divisor = 1000;
            nomeclatura = 'segundos';
        }
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${nomeclatura}`);
            retorno;
        }
        return descriptor;
    }
}