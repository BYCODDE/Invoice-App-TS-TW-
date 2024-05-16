import InvoiceStatusInfo from "../components/InvoiceStatusInfo";
import arrowLeft from "/assets/icon-arrow-left.svg";

export default function InvoiceDetails() {
  return (
    <div className="w-full pt-[33px] px-[24px] bg-[#F8F8FB] dark:bg-[#0C0E16]">
      <div className="flex items-center gap-[23px]">
        <img src={arrowLeft} alt="left-arrow" />
        <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-[#FFFFFF]">
          Go back
        </p>
      </div>

      <InvoiceStatusInfo />
    </div>
  );
}
