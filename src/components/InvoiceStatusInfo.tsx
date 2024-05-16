export default function InvoiceStatusInfo() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#1E2139] pt-[24px] pb-[27px] px-[24px] mt-[31px] flex justify-between items-center rounded-[8px]">
      <p className="text-[#858BB2] dark:text-[#DFE3FA] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
        Status
      </p>
      <div className="flex gap-[8px] items-center pt-[14px] pr-[19px] pb-[11px] pl-[18px] bg-[#ff910011] rounded-[5px]">
        <div className="w-[8px] h-[8px] rounded-full bg-[#FF8F00] mb-[2px]"></div>
        <p className="text-[#FF8F00] font-bold text-[15px] leading-[15px] tracking-[-0.25px]">
          Pending
        </p>
      </div>
    </div>
  );
}
