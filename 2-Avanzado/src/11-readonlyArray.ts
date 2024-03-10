/**
 * Originalmente los array no son inmutables, es decir podemos cambiarlos agregando o eliminado elementos.
 * ReadAonlyArray -> nos permite definir arrays que sean solo de lectura y no se permitan su modificacion
 */
const nums: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// solo podemos acceder a los metodos que no mutan el estado de un array
// pero metodo como pop, push, unshift no son permitidos
nums.filter(() => {});
nums.reduce(() => 0);
nums.map(() => 0);
