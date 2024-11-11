import { ArrowDownUpIcon } from "lucide-react";
import { db } from "../_lib/prisma";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";

const TransactionPage = async () => {
  //Acessar as transações do seu banco de daods
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="font bold text-2xl">Transações</h1>
        <Button className="rounded-full">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={TransactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionPage;
