import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(Transaction)
    private transactionRepo: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const { product_id, quantity, user_id } = createTransactionDto;

    const product = await this.productRepo.findOne({
      where: { id: product_id },
    });
    console.log('product', product);

    const user = await this.userRepo.findOne({ where: { id: user_id } });
    console.log('user', user);

    if (!product || !user) {
      throw new Error('product or user not found');
    }

    const transaction = this.transactionRepo.create({
      product_id,
      user_id,
      quantity,
      date: new Date().toISOString(),
    });

    return this.transactionRepo.save(transaction);
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
