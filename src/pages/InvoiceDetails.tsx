import { useParams } from "react-router-dom";
import InvoiceDetailsButtons from "../components/InvoiceDetailsButtons";
import InvoiceStatusInfo from "../components/InvoiceStatusInfo";
import SingleInvoiceInformation from "../components/SingleInvoiceInformation";
import arrowLeft from "/assets/icon-arrow-left.svg";
import { useContext, useEffect, useState } from "react";
import { IInvoices, InvoiceContext } from "../App";

export default function InvoiceDetails() {
  const [choosenInvoice, setChoosenInvoice] = useState<IInvoices | null>(null);
  const { id } = useParams();
  const { invoices } = useContext(InvoiceContext);
  console.log(invoices);
  console.log(choosenInvoice);

  useEffect(() => {
    const foundInvoice = invoices.find((invoice) => invoice.id === id);
    if (foundInvoice) {
      setChoosenInvoice(foundInvoice);
    }
  }, [id, invoices]);

  return (
    <div className="w-full max-w-[500px] m-auto md:max-w-[688px] md:w-[688px] md:m-auto xl:w-[730px] xl:max-w-[730px] relative">
      <div className=" pt-[33px] px-[24px]">
        <div className="flex items-center gap-[23px] xl:cursor-pointer">
          <img src={arrowLeft} alt="left-arrow" className="xl:mb-[2px]" />
          <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-[#FFFFFF] xl:hover:text-[#7E88C3]">
            Go back
          </p>
        </div>

        <InvoiceStatusInfo choosenInvoice={choosenInvoice} />
        <SingleInvoiceInformation choosenInvoice={choosenInvoice} />
      </div>
      <div className="md:hidden">
        <InvoiceDetailsButtons />
      </div>
    </div>
  );
}
