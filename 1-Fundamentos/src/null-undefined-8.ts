(() => {
  /** null y undefined no forman parte del conjunto de datos number y string */
  // let myNumber: number = undefined;
  // let myString: string = null;

  /** cuando asignamos a una variable tipo de dato null y undefined typescript le asigna tipo any*/
  let nulo = null;
  let indefinido = undefined;

  /** cuando forzamos que los tipos sea nulo y undefined entonces typescript le asigna null y undefined */
  let nulo1: null = null;
  let indefinido1: undefined = undefined;

  /** puede existir el caso donde una variable de tipo number necesitamos que al inicializar permita nulo */
  let price: number | null = null;
  price = 50.5;

  let description: string | undefined = undefined;
  description = 'Product 1';

  function saludar(name: string | null) {
    let hello = 'Hello ';
    // validamos con optional chain (?) si la variable name es null, si lo es, escribimos nobody
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.info(hello);
  }

  saludar('Antonio');
})();
