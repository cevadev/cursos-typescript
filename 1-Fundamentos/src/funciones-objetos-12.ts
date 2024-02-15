(() => {
  type Sizes = 'S' | 'M' | 'L' | 'X' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    // insertamos el producto al array
    products.push(data);
  };

  addProduct({
    title: 'Desamador',
    createdAt: new Date(),
    stock: 10,
    size: 'M',
  });

  for (const product of products) {
    console.info(product);
  }
})();
