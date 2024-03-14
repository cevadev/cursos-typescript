/**
 *
 */
export class MyMath {
  static readonly PI = 3.14159;
  static max(...params: number[]) {
    return params.reduce((max, param) => (max >= param ? max : param), 0);
  }
}

console.info(MyMath.PI);
//console.info(MyMath.max(2, 5, 8, 3, 6));
const params = [2, 5, 6, 5, 8, 6, 9, 25, 8, 74, 1, 5, 3, 69];
console.info(MyMath.max(...params));
