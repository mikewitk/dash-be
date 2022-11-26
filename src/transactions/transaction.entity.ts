import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  product_id: number;

  @Column()
  quantity: number;

  @Column()
  date: Date;
}
