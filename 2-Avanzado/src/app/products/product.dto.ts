import { Product } from './product.model';

/**
 * Especificamos un Utility Type: DTO
 * Omit<interface_name> -> nos permite omitir campos de la interface que no necesitamos que el DTO maneje
 * En nuestro ejemplo creamos un DTO para Product donde se omiten los campos id, createdAt, updatedAt, category
 * Al momento de crear un nuevo producto necesitamos pasar el id de la categoria al que pertenece el producto
 */
export interface CreateProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
