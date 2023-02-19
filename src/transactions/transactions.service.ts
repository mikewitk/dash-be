import { BadRequestException, Injectable } from '@nestjs/common';

export interface ITransactionsSummary {
  totalRevenue: number;
  totalTransactions: number;
  totalProducts: number;
  totalUsers: number;
}
@Injectable()
export class TransactionsService {
  /**
   * user: user info to validate endpoint
   * @returns totalRevenue: number, totalTransactions: number, totalProducts: number, totalUsers: number
   */
  getTransactionsSummary(user) {
    const transactionsSummary: ITransactionsSummary = {
      totalProducts: 0,
      totalRevenue: 0,
      totalTransactions: 0,
      totalUsers: 0,
    };

    if (!user) {
      throw new BadRequestException('wrong credentials');
    }

    return transactionsSummary;
  }

  getTransactions() {
    return 'All Transactions';
  }

  getTransaction() {
    return 'Transaction';
  }

  createTransaction() {
    return 'Transaction created';
  }

  updateTransaction() {
    return 'Transaction updated';
  }

  deleteTransaction() {
    return 'Transaction deleted';
  }
}
