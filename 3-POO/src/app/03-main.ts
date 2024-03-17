import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productService = new ProductHttpService();

  try {
    // para un futuro, ProductHttpService podria implementar el patron singleton
    console.log('---'.repeat(10));
    console.log('getAll() method');
    const productList = await productService.getAll();

    console.info(productList.length);
    console.info(productList.map((item) => item.price));

    const productId = productList[0].id;
    console.log('---'.repeat(10));
    console.log('update() method');
    await productService.update(productId, {
      price: 10000,
      title: 'updated expensive product',
      description: 'the new expensive product',
    });

    console.log('---'.repeat(10));
    console.log('findOne() method');
    const updatedProduct = await productService.findOne(productId);
    console.info(updatedProduct);
  } catch (error) {
    console.error(error);
  }
})();
