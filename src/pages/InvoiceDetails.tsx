import InvoiceDetailsButtons from "../components/InvoiceDetailsButtons";
import InvoiceStatusInfo from "../components/InvoiceStatusInfo";
import SingleInvoiceInformation from "../components/SingleInvoiceInformation";
import arrowLeft from "/assets/icon-arrow-left.svg";

export default function InvoiceDetails() {
  return (
    <div className="w-full max-w-[500px] m-auto md:max-w-[688px] md:w-[688px] md:m-auto xl:w-[730px] xl:max-w-[730px] relative">
      <div className=" pt-[33px] px-[24px]">
        <div className="flex items-center gap-[23px] xl:cursor-pointer">
          <img src={arrowLeft} alt="left-arrow" className="xl:mb-[2px]" />
          <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-[#FFFFFF] xl:hover:text-[#7E88C3]">
            Go back
          </p>
        </div>

        <InvoiceStatusInfo />
        <SingleInvoiceInformation />
      </div>
      <div className="md:hidden">
        <InvoiceDetailsButtons />
      </div>
    </div>
  );
}
