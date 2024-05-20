import { IInvoices } from "../App";
import InvoicePaymentInfo from "./InvoicePaymentInfo";
import InvoicePaymentInfoLarger from "./InvoicePaymentInfoLarger";

import dateFormat from "dateformat";

interface SingleInvoiceInformationProps {
  choosenInvoice: IInvoices | null;
}

export default function SingleInvoiceInformation({
  choosenInvoice,
}: SingleInvoiceInformationProps) {
  return (
    <div className="mt-[16px] pt-[25px] px-[24px] pb-[24px] bg-[#FFF] dark:bg-[#1E2139] rounded-[8px] md:p-[32px] xl:pt-[50px] xl:px-[48px] xl:pb-[48px]">
      <div className="md:flex md:justify-between">
        <div>
          <p className="text-[#7E88C3] dark:text-[#858BB2] font-bold text-[15px] leading-[15px] tracking-[-0.25px]">
            #
            <span className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[15px] tracking-[-0.25px]">
              {choosenInvoice?.id}
            </span>
          </p>
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[15px] tracking-[-0.1px] mt-[4px]">
            {choosenInvoice?.description}
          </p>
        </div>

        <div className="mt-[30px] flex flex-col gap-[4px] md:mt-0">
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
            {choosenInvoice?.senderAddress.street}
          </p>
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
            {choosenInvoice?.senderAddress.city}
          </p>
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
            {choosenInvoice?.senderAddress.postCode}
          </p>
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
            {choosenInvoice?.senderAddress.country}
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
              {dateFormat(choosenInvoice?.createdAt, "d mmm yyyy")}
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px] mt-[31px]">
              Payment Due
            </p>
            <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px] mt-[13px]">
              {dateFormat(choosenInvoice?.paymentDue, "d mmm yyyy")}
            </p>
          </div>
          <div>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
              Bill To
            </p>
            <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px] mt-[13px]">
              {choosenInvoice?.clientName}
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px] mt-[7px]">
              {choosenInvoice?.clientAddress.street}
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px] mt-[4px]">
              {choosenInvoice?.clientAddress.city}
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px] mt-[4px]">
              {choosenInvoice?.clientAddress.postCode}
            </p>
            <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px] mt-[4px]">
              {choosenInvoice?.clientAddress.country}
            </p>
          </div>
        </div>

        <div className="mt-[32px] flex flex-col gap-[13px] md:mt-0">
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[13px] leading-[18px] tracking-[-0.1px]">
            Sent to
          </p>
          <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
            {choosenInvoice?.clientEmail}
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
