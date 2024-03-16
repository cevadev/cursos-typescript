import axios from 'axios';
import { Product } from './models/product.model';

(async () => {
  // aplicamos tipado. Es una promesa que retorna un array de productos Promise<Product[]> pero es un tipado hacia afuera
  async function getProducts(): Promise<Product[]> {
    // aplicamos un tipado de Product[] al get() de esa manera podemos hacer operaciones con el productList
    const productList = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    // otra forma de aplicar tipado es haciendo un cast a la respuesta y asi retornamos como respuesta un array de productos
    // const productData = productList.data as Product[]
    return productList.data; // data es una propiedad que retorna axios, alli contiene unicamente los datos de la respuesta
  }

  const products = await getProducts();
  // como se ha tipado la respuesta como un array de productos, accedemos a los metodos del array
  console.info(products.map((product) => `${product.id} - ${product.title}`));
})();
