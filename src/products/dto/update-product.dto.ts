import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  image_url?: string;
}
