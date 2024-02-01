/***
 * Se aconseja no utilizar el keyword any
 */
(() => {
  let dynamicVar: any; // la variable puede contener cualquier tipo de dato
  dynamicVar = {};
  dynamicVar = [1, 2, 3];
  dynamicVar = false;

  // forzando un variable any a un tipo especifico (cast)
  dynamicVar = '555';
  const data = (dynamicVar as string).toString();
  console.info(data);

  // 2da forma usando generics
  let data2: any = '888';
  const num = (<number>data2).toFixed;
  console.info(num);
})();
