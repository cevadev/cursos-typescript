/**
 * La sobrecarga de funciones en typescript solo se pueden hacer usando funciones declaradas, es decir,
 * aquellas que utilizan la palabra function(){}
 * La funcion parseStr() puede retornar tanto un string como un array por lo que typescript no tiene forma de saber
 * que la respuesta de la funcion sea array o string. solo sabe que es una de los dos tipos posibles pero no sabe cual
 */
function parseStr(input: string | string[]): string | string[] {
  // validamos si input es un array
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    // no es array, entonces un string
    return input.split('');
  }
}

const test1 = parseStr('Carlos');
console.info(test1);
// para tratar a test1 como array primero debo validar
if (Array.isArray(test1)) {
  console.info(test1.reverse());
}

const test2 = parseStr(['c', 'a', 'r', 'l', 'o', 's']);
console.info(test2);
// para que test2 sea tratado como un string primero debemos validar
if (typeof test2 === 'string') {
  console.info(test2.toUpperCase());
}
