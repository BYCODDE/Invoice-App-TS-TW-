import InvoicePaymentInfo from "./InvoicePaymentInfo";
import InvoicePaymentInfoLarger from "./InvoicePaymentInfoLarger";

export default function SingleInvoiceInformation() {
  return (
    <div className="mt-[16px] pt-[25px] px-[24px] pb-[24px] bg-[#FFF] dark:bg-[#1E2139] rounded-[8px] md:p-[48px]">
      <div className="md:flex md:justify-between">
        <div>
          <p className="text-[#7E88C3] dark:text-[#858BB2] font-bold text-[15px] leading-[15px] tracking-[-0.25px]">
            #
            <span className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[15px] tracking-[-0.25px]">
              XM9141
            </span>
          </p>
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[15px] tracking-[-0.1px] mt-[4px]">
            Graphic Design
          </p>
        </div>

        <div className="mt-[30px] flex flex-col gap-[4px] md:mt-0">
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
            19 Union Terrace
          </p>
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
            London
          </p>
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
            E1 3EZ
          </p>
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
            United Kingdom
          </p>
        </div>
      </div>

      <div className="md:flex md:gap-[117px] md:mt-[21px]">
        <div className="mt-[31px] flex gap-[61px] md:gap-[117px] md:m-0">
          <div>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
              Invoice Date
            </p>
            <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px] mt-[13px]">
              21 Aug 2021
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px] mt-[31px]">
              Payment Due
            </p>
            <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px] mt-[13px]">
              20 Sep 2021
            </p>
          </div>
          <div>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
              Bill To
            </p>
            <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px] mt-[13px]">
              Alex Grim
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px] mt-[7px]">
              84 Church Way
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px] mt-[4px]">
              Bradford
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px] mt-[4px]">
              BD1 9PB
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px] mt-[4px]">
              United Kingdom
            </p>
          </div>
        </div>

        <div className="mt-[32px] flex flex-col gap-[13px]">
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
            Sent to
          </p>
          <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
            alexgrim@mail.com
          </p>
        </div>
      </div>

      <div className="block md:hidden">
        <InvoicePaymentInfo />
      </div>

      <div className="hidden md:block">
        <InvoicePaymentInfoLarger />
      </div>
    </div>
  );
}
