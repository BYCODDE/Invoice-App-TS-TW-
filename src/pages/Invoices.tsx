import Filter from "../components/Filter";
import IncomeInvoice from "../components/IncomeInvoice";

export default function Invoices() {
  return (
    <div className="flex flex-col justify-center items-center p-[20px] mt-[32px] bg-white">
      <Filter />
      <IncomeInvoice />
    </div>
  );
}
