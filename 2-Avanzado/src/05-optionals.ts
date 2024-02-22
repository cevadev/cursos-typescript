/**
 * Los parametros opcionales se colocan al final.
 * Javascript nullish-coalesin asignar valores opciones a parametros que no se le envian parametros a una funcion
 *
 */
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    // evaluamos la variable opcional stock. si no viene un stock por defecto colocamos 0. Utilizamos el nullish operator ??
    stock: stock ?? 1, // nullish coalesin form
    isNew: isNew ?? true,
  };
};

const prod1 = createProduct(1);
console.info(prod1);

const prod2 = createProduct(10, false, 0);
console.info(prod2);
