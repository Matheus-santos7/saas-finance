import { TransactionType } from "@prisma/client";

export type TransactionPercentagePerTypes = {
  [key in TransactionType]: number;
};
