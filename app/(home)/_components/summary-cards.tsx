import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
}: SummaryCards) => {
  return (
    <div className="space-y-6">
      {/*Primeiro Card*/}
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />
      {/*Outros Card*/}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={14} />}
          title="Investido"
          amount={investmentsTotal}
          size="small"
        />
        <SummaryCard
          icon={<TrendingUpIcon size={14} className="text-primary" />}
          title="Receita"
          amount={depositsTotal}
          size="small"
        />
        <SummaryCard
          icon={<TrendingDownIcon size={14} className="text-danger" />}
          title="Despesa"
          amount={expensesTotal}
          size="small"
        />
      </div>
    </div>
  );
};

export default SummaryCards;
