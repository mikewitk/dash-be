import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  image_url: string;
}
