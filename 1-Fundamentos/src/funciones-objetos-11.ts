(() => {
  // paso a la funcion login un objeto
  const login = (data: { email: string; password: string }) => {
    console.info(data.email, data.password);
  };
  login({
    email: 'cosme_fulanito@aol.com',
    password: 'adivinalo',
  });
})();
