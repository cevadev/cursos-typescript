/**
 * Recordemos que con la palabra reservada type puedo definir tipos primitivos o directos.
 * Con las interfaces podemos definir un conjunto de atributos o datos como en el ejemplo de Product.
 * Los type no se puede extender pero un interface si se puede extender.
 */
type Medidas = 'S' | 'M' | 'X' | 'XL' | 'XXL';

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Medidas;
}

//  arreglo de productos
const productos: Product[] = [];
productos.push({
  id: 1,
  title: 'Tornillos',
  createdAt: new Date(),
  stock: 90,
});
