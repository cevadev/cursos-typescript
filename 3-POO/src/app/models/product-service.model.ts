import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { Product } from './product.model';

export interface ProductService {
  // getAll() puede retornar un array de Product o una promesa con un array de Product
  getAll(): Product[] | Promise<Product[]>;
  update(
    id: Product['id'],
    changes: UpdateProductDTO
  ): Product | Promise<Product>;
  create(dto: CreateProductDTO): Product | Promise<Product>;
  findOne(
    id: Product['id']
  ): Product | undefined | Promise<Product | undefined>;
}
