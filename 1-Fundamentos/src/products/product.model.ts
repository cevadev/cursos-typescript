// con la keyword export hacemos exportables estos objetos
export type Sizes = 'S' | 'M' | 'L' | 'X' | 'XL';
export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
