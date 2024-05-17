export default function InvoicePaymentInfoLarger() {
  return (
    <div className=" mt-[47px]">
      <div className="flex justify-between pt-[33px] px-[32px] md:pb-[39px] bg-[#F9FAFE] dark:bg-[#252945] rounded-t-[8px]">
        <div className="flex flex-col gap-[32px]">
          <h3 className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA]">
            Item Name
          </h3>
          <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
            Banner Design
          </p>
          <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
            Email Design
          </p>
        </div>
        <div className="flex">
          <div className="mr-[60px] flex flex-col items-center gap-[32px]">
            <h3 className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA]">
              QTY.
            </h3>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[15px] leading-[18px] tracking-[-0.1px]">
              1
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[15px] leading-[18px] tracking-[-0.1px]">
              2
            </p>
          </div>
          <div className="mr-[81px] flex flex-col items-end gap-[32px]">
            <h3 className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA]">
              Price
            </h3>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[15px] leading-[18px] tracking-[-0.1px]">
              £ 156.00
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[15px] leading-[18px] tracking-[-0.1px]">
              £ 200.00
            </p>
          </div>
          <div className="flex flex-col items-end gap-[32px]">
            <h3 className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA]">
              Total
            </h3>
            <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
              £ 156.00
            </p>
            <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
              £ 400.00
            </p>
          </div>
        </div>
      </div>

      <div className="pt-[27px] px-[32px] pb-[21px] flex justify-between items-center bg-[#373B53] dark:bg-[#0C0E16] rounded-b-[8px]">
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
