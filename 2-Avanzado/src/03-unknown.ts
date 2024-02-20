/**
 * Este tipo unknow nos dice que la variable es desconocida
 * Typescript sugiere no utilizar any en su lugar recomienda usar unknown
 */

// recordar el uso de any
let anyVar: any = true;
anyVar = undefined;
anyVar = 'Hello';

// usando unknown
let unknownVar: unknown;
unknownVar = true;
unknownVar = [];
unknownVar = {};
unknownVar = null;

// antes de usar unknown debemos verificar el tipo. verificamos que sea de tipo string para usar los metodo de una variable string
if (typeof unknownVar === 'string') {
  unknownVar.toLowerCase();
}

if (typeof unknownVar === 'boolean') {
  let newVar: boolean = unknownVar;
}
