import InvoiceDetailsButtons from "../components/InvoiceDetailsButtons";
import InvoiceStatusInfo from "../components/InvoiceStatusInfo";
import SingleInvoiceInformation from "../components/SingleInvoiceInformation";
import arrowLeft from "/assets/icon-arrow-left.svg";

export default function InvoiceDetails() {
  return (
    <div className="bg-[#F8F8FB] dark:bg-[#0C0E16]">
      <div className="  w-full md:w-[688px] md:m-auto">
        <div className=" pt-[33px] px-[24px]">
          <div className="flex items-center gap-[23px]">
            <img src={arrowLeft} alt="left-arrow" />
            <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-[#FFFFFF]">
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
    </div>
  );
}
