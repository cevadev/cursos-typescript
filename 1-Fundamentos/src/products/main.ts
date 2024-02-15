import { products, calcStock, addProduct } from './product.service';
import { Sizes, Product } from './product.model';

addProduct({
  title: 'Desarmador',
  createdAt: new Date(),
  stock: 10,
  size: 'M',
});

addProduct({
  title: 'Desarmador',
  createdAt: new Date(),
  stock: 5,
  size: 'L',
});

const stock = calcStock();
console.info(products);
console.info(`Total de stock para el producto Desarmador ${stock}`);
