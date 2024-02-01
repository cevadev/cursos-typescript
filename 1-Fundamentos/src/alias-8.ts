(() => {
  // creamos nuestro tipo o alias Id
  type Id = string | number;
  let userId: Id; // asignamos el alias a una variable

  function process(data: Id) {
    if (typeof data === 'string') {
      console.info('procesando el codigo de usuario ' + data);
    } else {
      console.info('el codigo del usuario es ' + data);
    }
  }

  process('AC-589');
  process(94458699);

  // Creacion de Literal Types
  type Size = 'S' | 'M' | 'X' | 'XL' | 'XXL'; // creamos nuestro propio tipo
  let customs: Size;

  function processData(data: Id, s: Size) {
    if (typeof data === 'string') {
      console.info(`El codigo de usuario es  ${data}, su talla es ${s}`);
    } else {
      console.info(`codigo numerico ${data}, su talla es ${s}`);
    }
  }

  processData('ad56', 'M');
  processData(94586, 'X');
})();
