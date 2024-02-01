(() => {
  // declaracion de una variable de manera explicita
  let productPrice: number = 25.9;

  // declaracion de una variable de manera inferida
  let productStock = 1000;

  productPrice = productPrice + 50;
  console.info('productPrice: ', productPrice);
})();
