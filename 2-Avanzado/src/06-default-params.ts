/**
 * Typescript tiene su manera de asignar un valor por defecto a los parametros
 */
export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 0
) => {
  return {
    id,
    stock,
    isNew,
  };
};

const prod1 = createProduct(1, true, 5);
console.info(prod1);

const prod2 = createProduct(10);
console.info(prod2);

const prod3 = createProduct(20, false, 10);
console.info(prod3);
