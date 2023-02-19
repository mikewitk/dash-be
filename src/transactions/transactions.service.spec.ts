import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsService],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Summary Transactions', () => {
    it('should return transactions summary if user is logged in', async () => {
      const user = {};
      const result = {
        totalProducts: 0,
        totalRevenue: 0,
        totalTransactions: 0,
        totalUsers: 0,
      };
      // jest.spyOn(service, 'getTransactionsSummary').mockReturnValue(result);
      expect(await service.getTransactionsSummary(user)).toStrictEqual(result);
    });

    it('should return error when user is not logged in', async () => {
      try {
        service.getTransactionsSummary(null);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
      }
    });
  });

  describe('Transactions', () => {
    it('should getTransactions should return "All Transactions"', () => {
      expect(service.getTransactions()).toEqual('All Transactions');
    });

    it('should getTransaction should return "Transaction"', async () => {
      expect(service.getTransaction()).toEqual('Transaction');
    });

    it('should createTransaction should return "Transaction created"', async () => {
      expect(service.createTransaction()).toEqual('Transaction created');
    });

    it('should updateTransaction should return "Transaction updated"', () => {
      expect(service.updateTransaction()).toEqual('Transaction updated');
    });

    it('should deleteTransaction should return "Transaction deleted"', () => {
      expect(service.deleteTransaction()).toEqual('Transaction deleted');
    });
  });
});
