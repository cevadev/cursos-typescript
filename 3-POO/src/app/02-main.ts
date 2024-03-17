import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();
productService.create({
  title: 'Product 1',
  price: 100,
  description: 'Producto 1 description',
  images: [],
  categoryId: 12,
});

const productList = productService.getAll();
// obtenemos la primera posicion del productList
const productId = productList[0].id;

// actualizamos un producto
productService.update(productId, {
  title: 'Product 1 renewed',
});

const product = productService.findOne(productId);
console.info(product);
