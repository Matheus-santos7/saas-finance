import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";
import { Badge } from "@/app/_components/ui/badge";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-1 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-muted font-bold text-danger hover:bg-muted">
        <CircleIcon className="mr-1 fill-danger" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted font-bold text-white hover:bg-white">
      <CircleIcon className="mr-1 fill-white" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
