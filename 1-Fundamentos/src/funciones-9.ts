(() => {
  type Size = 'S' | 'M' | 'X' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Size
  ) {
    // creamos un objeto json
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const producto = createProductToJson('Remeras', new Date(), 100, 'S');

  // version arrow function
  const convertProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    // variable size es opcional (?)
    size?: Size
  ) => {
    // creamos un objeto json
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  // no pasamos la propiedad size por la declaramos como opcional (?)
  const newProduct = convertProductToJson('Pantalon', new Date(), 15);
  console.info(newProduct);
})();
