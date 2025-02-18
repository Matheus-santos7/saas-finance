import { TransactionCategory, TransactionType } from "@prisma/client";

export type TransactionPercentagePerTypes = {
  [key in TransactionType]: number;
};

export interface TotalExpensePerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
