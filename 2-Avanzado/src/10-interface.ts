/**
 * Recordemos que con la palabra reservada type puedo definir tipos primitivos o directos por ejemplo tipo string, number, etc
 * Con las interfaces podemos definir un conjunto de atributos o un cuerpo como en el ejemplo de Product.
 * La diferencia entre types e interface es que una interface se puede extender mientras que un type no.
 */
type Sizes = 'S' | 'M' | 'X' | 'XL' | 'XXL';

/***  ejemplo de Tipado de Objeto ***/
type Producto = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
};

// uso del tipado
const productos: Producto[] = [];
productos.push({
  id: 'ABC001',
  title: 'CPU',
  createdAt: new Date(),
  stock: 10,
  size: 'M',
});

/*** ejemplo de tipado usando Interfaces  ***/

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

//  arreglo de productos
const items: Product[] = [];
items.push({
  id: 1,
  title: 'Tornillos',
  createdAt: new Date(),
  stock: 90,
});
