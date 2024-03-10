import { faker } from '@faker-js/faker';

import { Product } from './product.model';
import { CreateProductDTO } from './product.dto';

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

export const updateProduct = (id: string, product: Product) => {};
