/**
 * Trabajando la sobrecarga de metodos con typescript
 *
 */

function convertStr(input: string): string[];
function convertStr(input: string[]): string;

function convertStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    // no es array, entonces un string
    return input.split('');
  }
}

const rtaArray = convertStr('Carlos');
console.info(rtaArray.reverse());

const rtaStr = convertStr(['C', 'A', 'R', 'L', 'O', 'S']);
console.info(rtaStr.toLocaleLowerCase());
