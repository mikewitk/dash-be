import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { User } from 'src/users/user.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  providers: [TransactionsService],
  imports: [
    UsersModule,
    ProductsModule,
    TypeOrmModule.forFeature([User, Product, Transaction]),
  ],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
