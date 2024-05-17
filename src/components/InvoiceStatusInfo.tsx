import InvoiceDetailsButtons from "./InvoiceDetailsButtons";

export default function InvoiceStatusInfo() {
  return (
    <div className="md:flex md:justify-between md:bg-[#FFFFFF] md:dark:bg-[#1E2139] md:mt-[31px] md:py-[20px] md:px-[32px]">
      <div className="bg-[#FFFFFF] dark:bg-[#1E2139] pt-[24px] pb-[27px] px-[24px] mt-[31px] flex justify-between items-center rounded-[8px] md:justify-start md:p-0 md:m-0 md:gap-[20px]">
        <p className="text-[#858BB2] dark:text-[#DFE3FA] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
          Status
        </p>
        <div className="flex gap-[8px] items-center pt-[14px] pr-[19px] pb-[11px] pl-[18px] bg-[#ff9100] bg-opacity-[0.0571] rounded-[6px]">
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF8F00] mb-[2px]"></div>
          <p className="text-[#FF8F00] font-bold text-[15px] leading-[15px] tracking-[-0.25px]">
            Pending
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <InvoiceDetailsButtons />
      </div>
    </div>
  );
}
