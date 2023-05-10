(() => {
  let isEnable = false;
  isEnable = true;

  let isNew: boolean = false;
  console.info('isNew: ', isNew);
  isNew = true;
  console.info('isNew: ', isNew);

  const random = Math.random();
  console.info('Random number: ', random);

  isNew = random >= 0.5 ? true : false;
  console.info('isNew: ', isNew);
})();
