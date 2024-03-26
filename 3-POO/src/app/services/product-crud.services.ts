import { UpdateProductDTO } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { ProductHttpService } from './product-http2.service';

export class ProductCrudService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDTO) {
    // validaciones de permisos
    // validaciones de logica de negocios
    return this.http.update(id, dto);
  }
}
