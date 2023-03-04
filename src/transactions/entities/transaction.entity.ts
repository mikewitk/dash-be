import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
  date: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Transaction with ID: ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Transaction with ID: ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Transaction with ID: ', this.id);
  }
}
