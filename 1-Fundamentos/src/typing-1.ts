/** funcion anonima autoejecutable */
(() => {
  let fahr: number;
  let celsius: number;

  const lower: number = 0;
  const upper: number = 300;
  const step: number = 20;

  fahr = lower;
  while (fahr <= upper) {
    celsius = (5.0 / 9.0) * (fahr - 32.0);
    console.info(`${fahr}\t ${celsius}`);
    fahr = fahr + step;
  }
})();
