// si empieza con miniscula lo usamos como funcion, si empieza con mayuscula es un decorator
import { IsNotEmpty, IsUrl, validate, validateOrReject } from 'class-validator';
import { Category } from '../models/category.model';

export interface ICreateCategoryDTO
  extends Omit<Category, 'id' | 'creationAt' | 'updatedAt'> {}
export class CreateCategoryDTO implements ICreateCategoryDTO {
  @IsNotEmpty()
  name!: string;
  @IsUrl()
  @IsNotEmpty()
  image!: string;
}

(async () => {
  try {
    const dto = new CreateCategoryDTO();
    dto.name = '';
    await validateOrReject(dto);
  } catch (error) {
    console.info(error);
  }
})();
