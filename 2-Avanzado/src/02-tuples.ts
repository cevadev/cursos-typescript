const numeros: number[] = [1, 2, 3, 4, 5];

// con una tupla podemos espeicificar longitud del array y los tipos en cada posicion
// definimos una tupla cuya primera posicion debe ser un string y en la segunda un numero y en la tercera un valor boolean
// definimos una tupla que solo permite dos elementos
const user: [string, number, boolean] = ['barcvilla', 50, true];

// destructuramos la tupla y obtenemos el userid y status
const [userid, active] = user;
console.info(user[0]);
console.info(user[2]);
