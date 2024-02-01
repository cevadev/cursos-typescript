(() => {
  let dynamicVar: string | number;
  dynamicVar = 485;
  console.info(dynamicVar);
  dynamicVar = 'ABD-5698';
  console.info(dynamicVar);

  function process(data: string | number) {
    // dependiendo del tipo, aplicamos un comportamiento
    if (typeof data === 'string') {
      console.info('Procesando datos.... ' + data);
    } else {
      console.info(`Se ha procesado la cantidad de ${data}`);
    }
  }

  process('reporte anual 2023');
  process(100000);
})();
