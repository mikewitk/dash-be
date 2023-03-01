import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  image_url: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Product with ID: ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Product with ID: ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Product with ID: ', this.id);
  }
}
