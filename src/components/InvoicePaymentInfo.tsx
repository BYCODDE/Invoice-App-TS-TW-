export default function InvoicePaymentInfo() {
  return (
    <div>
      <div className="bg-[#F9FAFE] dark:bg-[#252945] pt-[25px] px-[24px] pb-[23px] rounded-t-[8px] flex flex-col gap-[24px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
              Banner Design
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[15px] leading-[18px] tracking-[-0.1px]">
              1 x £ 156.00
            </p>
          </div>
          <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
            £ 156.00
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
              Email Design
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[15px] leading-[18px] tracking-[-0.1px]">
              2 x £ 200.00
            </p>
          </div>
          <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
            £ 400.00
          </p>
        </div>
      </div>

      <div className="pt-[26px] px-[24px] pb-[22px] bg-[#373B53] dark:bg-[#0C0E16] rounded-b-[8px] flex justify-between items-center">
        <p className="font-medium text-[13px] leading-[18px] tracking-[-1px] text-[#FFFFFF]">
          Amount Due
        </p>
        <h2 className="font-bold text-[24px] leading-[32px] tracking-[-0.5px]  text-[#FFFFFF]">
          £ 556.00
        </h2>
      </div>
    </div>
  );
}
