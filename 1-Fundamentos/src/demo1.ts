/**
 * Por defecto tsc compilar a una version muy antigua de javascript (ES3)
 * Para compilar un archivo tsc a js version es6 y que el archivo compilado lo envie a
 * la carpet dist: ejecutamos el comando
 * npx tsc "ruta_del_archivo_.ts" --target es6 --outDir dist
 *
 * o si queremos que los archivos tsc de la carpeta src se compilen:
 * npx tsc src/*.tsc --target es6 --outDir dist
 */

async () => {
  const myCart = [];
  const products: string | any[] = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET',
    });

    const data = await rta.json();
    products.concat(data);
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i]['price'];
    }
    return total;
  }

  function addProduct(index: number) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina',
  };

  /*  const rta = `${person} ${limit}`;
  console.info(rta);*/
};
