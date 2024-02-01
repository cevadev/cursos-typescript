(() => {
  let prices: number[] = [80, 10, 15, 26.3, 50, 40];
  prices.push(33.33);
  console.info(prices);

  /* array con tipos de datos multiples */
  let mixed: (number | string | boolean | {})[] = [
    'HP Pro',
    50000,
    true,
    'HP Pro Book',
    60000,
    false,
    {
      name: 'Jorge',
      edad: 27,
    },
    [1, 2, 4],
  ];
  console.info(mixed);
})();
