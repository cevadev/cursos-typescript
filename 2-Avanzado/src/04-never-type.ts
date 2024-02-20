/**
 * Never type se utiliza para funciones que sabemos que nunca van a terminar como podria ser un ciclo infinito
 */
const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  }
  //verificar si es un array
  else if (Array.isArray(input)) {
    return 'Esto es un array';
  }
  return fail('los tipos no coinciden');
};

console.info(example('Hola'));
console.info(example([256, 587, 2]));
console.info(example(123));
console.info(example('Hola, despues de que ocurrio un error'));
