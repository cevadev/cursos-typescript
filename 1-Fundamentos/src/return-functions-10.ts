(() => {
  // especificamos que la funcion anonima retorna un valor de tipo number
  const calcTotal = (prices: number[]): number => {
    let total: number = 0;
    prices.forEach((price) => {
      total += price;
    });
    return total;
  };

  // especificamos que la funcion anonima retorna void
  const printTotal = (prices: number[]): void => {
    const total = calcTotal(prices);
    console.info('el total es: ' + total);
  };

  printTotal([5.2, 6, 32.8, 10, 0.6]);
})();
