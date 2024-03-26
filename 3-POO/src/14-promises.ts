/**
 * Aplicando tipado a las promesas
 */

import axios from 'axios';

(async () => {
  function delay(time: number) {
    const myPromis = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return myPromis;
  }
  const rpta = await delay(3000);
  console.info(rpta);

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  // const products = await getProducts();
  // console.info(products.data);

  // version asincrona de getProducts()
  async function getProductsAsync() {
    const rpta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rpta.data;
  }

  const productsAsync = await getProductsAsync();
  console.info(productsAsync);
})();
  