export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`-- METODO ${propertyKey}`);
    console.log(`-- PARAMETRO ${JSON.stringify(args)}`);
    const retorno = metodoOriginal.apply(this, args);
    console.log(`-- RETORNO ${JSON.stringify(retorno)}`);
    retorno;
  };
  return descriptor;
}
