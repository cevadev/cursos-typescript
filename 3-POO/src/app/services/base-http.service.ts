import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { UpdateProductDTO } from '../dtos/product.dto';

/**
 *
 */
export class BaseHttpService<TypeClass> {
  //private data: TypeClass[] = [];
  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async () => {
  const url = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url);
  const productList = await productService.getAll();
  console.info(productList);

  productService.update<Product['id'], UpdateProductDTO>(1, {
    title: 'producto prueba 111',
  });

  const url1 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url1);
  const categoryList = await categoryService.getAll();
  console.info(categoryList);
})();
