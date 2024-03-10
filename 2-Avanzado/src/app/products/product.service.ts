import { faker } from '@faker-js/faker';

import { Product } from './product.model';
import {
  CreateProductDTO,
  UpdateProductDTO,
  FindProductDTO,
} from './product.dto';

export const products: Product[] = [];

export const addProduct = (product: CreateProductDTO): Product => {
  // normalmente el id la genera la BD y createdAt, updatedAt son datos que producen al momento de insercion, aqui lo generamos
  // nosotros de manera ficticia
  const newProduct = {
    // pasamos la informacion que tenemos del Product
    ...product,
    // agregamos los datos que faltan como el id, createdAt, updatedAt, etc
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

/**
 *
 * @param id parametro que nos permite buscar un producto dentro del array products, con la forma Product['id'] obtenemos el tipado
 *        del atributo id de Product, esto nos da la flexibilidad de que si mas adelante el tipo de dato del atributo id cambia
 *        no tenemos que hacer cambios en nuestro codigo.
 * @param changes
 * @returns
 */
export const updateProduct = (
  /* id: string */
  // id: Product['id'],
  id: string,
  changes: UpdateProductDTO
): Product => {
  // obtenemos el id del producto en el array
  const index = products.findIndex((product) => product.id == id);
  // seleccionamos el producto con los datos antiguos
  const oldProduct = products[index];
  products[index] = {
    // hacemos un merge entre los datos antiguos y los modificados
    ...oldProduct,
    ...changes,
  };
  return products[index];
};

export const findProduct = (product: FindProductDTO): Product[] => {
  return products;
};
