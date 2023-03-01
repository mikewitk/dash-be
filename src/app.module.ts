import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { SchedulesModule } from './schedules/schedules.module';
import { Transaction } from './transactions/transaction.entity';
import { TransactionsModule } from './transactions/transactions.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Transaction, Product],
      synchronize: true,
    }),
    ProductsModule,
    SchedulesModule,
    TransactionsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
