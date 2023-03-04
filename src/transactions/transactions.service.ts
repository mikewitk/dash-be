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

    const user = await this.userRepo.findOne({ where: { id: user_id } });

    if (!product || !user) {
      throw new Error('product or user not found');
    }

    const transaction = this.transactionRepo.create({
      product_id,
      user_id,
      quantity,
      date: new Date().toLocaleString(),
    });

    return this.transactionRepo.save(transaction);
  }

  async findAll() {
    return await this.transactionRepo.find();
  }

  async findOne(id: number) {
    const transaction = await this.getTransaction(id);

    return transaction;
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.getTransaction(id);

    Object.assign(transaction, updateTransactionDto);

    return this.transactionRepo.save(transaction);
  }

  async remove(id: number) {
    const transaction = await this.getTransaction(id);

    return this.transactionRepo.remove(transaction);
  }

  private async getTransaction(id: number) {
    const transaction = await this.transactionRepo.findOne({ where: { id } });

    if (!transaction) {
      throw new Error('transaction not found');
    }

    return transaction;
  }
}
