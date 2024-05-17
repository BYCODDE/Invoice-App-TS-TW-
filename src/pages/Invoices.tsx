import { useContext } from "react";
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
interface InvoiceProps {
  invoices: IInvoices[];
}
const Invoices: React.FC<InvoiceProps> = () => {
  const { invoices } = useContext(InvoiceContext);

  return (
    <div className="flex flex-col justify-center items-center p-[20px] mt-[32px] bg-white">
      <Filter invoices={invoices} />
      {invoices.map((item) => (
        <IncomeInvoice key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Invoices;
