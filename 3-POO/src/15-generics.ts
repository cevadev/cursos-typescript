/**
 * Con los genericos podemos enviar el tipado como un parametro
 */
function getValue<T>(value: T) {
  return value;
}

// ahora typescript va a inferir el tipo
console.info(getValue('Tres').toUpperCase()); // infiere tipo string
// enviamos el tipado
console.info(getValue<number>(17).toFixed());
