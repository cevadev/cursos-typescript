import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  getAll() {
    return this.products;
  }

  create(product: CreateProductDTO): Product {
    // normalmente el id la genera la BD y createdAt, updatedAt son datos que producen al momento de insercion, aqui lo generamos
    // nosotros de manera ficticia
    const newProduct = {
      // pasamos la informacion que tenemos del Product
      ...product,
      // agregamos los datos que faltan como el id, createdAt, updatedAt, etc
      id: faker.number.int(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: faker.number.int(),
        name: faker.commerce.department(),
        image: faker.image.url(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    };
    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  findOne(id: Product['id']) {
    return this.products.find((product) => product.id === id);
  }

  update(
    /* id: string */
    // id: Product['id'],
    id: number,
    changes: UpdateProductDTO
  ): Product {
    // obtenemos el id del producto en el array
    const index = this.products.findIndex((product) => product.id == id);
    // seleccionamos el producto con los datos antiguos
    const oldProduct = this.products[index];
    this.products[index] = {
      // hacemos un merge entre los datos antiguos y los modificados
      ...oldProduct,
      ...changes,
    };
    return this.products[index];
  }
}

//export const products: Product[] = [];
