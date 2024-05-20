import { useContext, useState } from "react";
import Filter from "../components/Filter";
import IncomeInvoice from "../components/IncomeInvoice";
import { InvoiceContext } from "../App";

export interface IInvoices {
  id: string;
  clientEmail: string;
  clientName: string;
  createdAt: string;
  description: string;
  paymentDue: string;
  paymentTerms: number;
  status: string;
  total: number;
}

const Invoices: React.FC = () => {
  const { invoices } = useContext(InvoiceContext);
  const [info, setInfo] = useState<string[]>([]); 

  const filteredInvoices = invoices.filter((invoice) => {
    if (info.length === 0) return true;
    return info.includes(invoice.status);
  });

  return (
    <div className="w-[100%] dark:bg-[#141625] flex flex-col justify-center items-center p-[20px] mt-[32px] bg-white">
      <Filter invoices={invoices} setInfo={setInfo} />
      {filteredInvoices.map((item) => (
        <IncomeInvoice key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Invoices;
