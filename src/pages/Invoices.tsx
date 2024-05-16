import { useContext } from "react";
import Filter from "../components/Filter";
import IncomeInvoice from "../components/IncomeInvoice";
import { InvoiceContext } from "../App";

export default function Invoices() {
  const { invoices } = useContext(InvoiceContext);
  
  
  return (
    <div className="flex flex-col justify-center items-center p-[20px] mt-[32px] bg-white">
      <Filter invoices={invoices}/>
      {invoices.map((item) => (
        <IncomeInvoice key={item.id} item={item} />
      ))}
    </div>
  );
}
