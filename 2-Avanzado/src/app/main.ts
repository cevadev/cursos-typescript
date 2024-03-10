import { faker } from '@faker-js/faker';
import {
  addProduct,
  findProduct,
  products,
  updateProduct,
} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'X', 'XL', 'XXL']),
    price: parseInt(faker.commerce.price()),
    tags: faker.helpers.arrayElements([
      'Electrodomestico',
      'Tecnologia',
      'Casa',
    ]),
    isNew: faker.datatype.boolean(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

console.info(products);

// elegimos el primer producto del array
const product = products[0];

// actualizamos algunos atributos del product
updateProduct(
  product.id,
  // enviamos un objeto con los atributos a actualizar del primer producto del array
  {
    title: 'New Product Title',
    stock: 111,
  }
);

findProduct({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
});
