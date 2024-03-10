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

// definimos una interface de Product donde sus campos son opcionales. estos nos permite pasar un objeto Product
// donde yo especifico las propiedades que quiero actualizar del producto.
// Partial<Product> hace que los atributos de la interface Product sean optional.
// en la interface CreateProductDTO indicamos que los atributos id, createdAt, updatedAt, category no van a ser generados manualmente
// al crear UpdateProductDTO Partial<Product> estamos haciendo optional todos los atributos de Producto incluyendo
// id, createdAt, updatedAt, category cosa que no deseamos ya estos atributos no deberian ser modificables.
// es por esta razon que no hacemos Partial<Product> sino Partial<CreateProductDTO> que maneja las reglas especificadas.
export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

// hacemos un ReadOnly<Partial<Product>> asi impedimos que el valor de los parametros de busqueda de un producto
// no puedan ser modificados y con Partial hacemos que los atributos de Product sean opcionales, logrando asi
// que cualquier atributo de Product se pueda usar opcionalmente como parametro de busqueda.
// Con Omit<Product, 'tags'> indicamos que omita tags porque vamos a redefinir el tipado del array tags
export interface FindProductDTO
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
