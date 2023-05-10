(() => {
  let productTitle = 'HP Notebook';
  productTitle = 'HP Notebook Pro';
  console.info('productTitle: ', productTitle);
  const productDescription: string =
    'Computadora portatil de ultima generacion';
  let productPrice: number = 400;

  console.info(`
  Summary: ${productTitle}, 
  Descripcion: ${productDescription},
  Precio: ${productPrice}`);
})();
