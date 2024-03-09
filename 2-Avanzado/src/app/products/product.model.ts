import { Category } from '../category/category.model';
import { BaseModel } from '../base.model';

export type Size = 'S' | 'M' | 'L' | 'X' | 'XL' | 'XXL';

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Size;
  color: string;
  price: number;
  // estructura mas compleja
  category: Category;
  isNew: boolean;
  tags: string[];
}
