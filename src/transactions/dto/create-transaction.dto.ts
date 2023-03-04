import { IsNumber, IsPositive } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  product_id: number;

  @IsNumber()
  @IsPositive()
  quantity: number;
}
