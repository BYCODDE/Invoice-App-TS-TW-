import { useEffect, useState } from "react";
import { IInvoices } from "../App";

interface InvoicePaymentInfoProps {
  choosenInvoice: IInvoices | null;
}

export default function InvoicePaymentInfoLarger({
  choosenInvoice,
}: InvoicePaymentInfoProps) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let calculatedTotalPrice = 0;
    if (choosenInvoice?.items) {
      for (let i = 0; i < choosenInvoice.items.length; i++) {
        calculatedTotalPrice += choosenInvoice.items[i].total;
      }
    }
    setTotalPrice(calculatedTotalPrice);
  }, [choosenInvoice]);

  return (
    <div className="mt-[47px] w-[100%]">
      <div className="pt-[33px] px-[32px] md:pb-[39px] bg-[#F9FAFE] dark:bg-[#252945] rounded-t-[8px]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA]">
                Item Name
              </h3>
            </div>
            <div className="flex justify-center gap-[40px]">
              <h3 className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA] w-[60px] text-center">
                QTY.
              </h3>
              <h3 className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA] w-[60px] text-center">
                Price
              </h3>
              <h3 className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA] w-[60px] text-center">
                Total
              </h3>
            </div>
          </div>

          {choosenInvoice?.items.map((item, index) => {
            return (
              <div className="flex items-center justify-between" key={index}>
                <div>
                  <p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
                    {item.name}
                  </p>
                </div>
                <div className="flex justify-center gap-[40px]">
                  <p className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA] w-[60px] text-center">
                    {item.quantity}
                  </p>
                  <p className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA] w-[60px] text-center">
                    £ {item.price.toFixed(2)}
                  </p>
                  <p className="text-[13px] font-medium leading-[18px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#DFE3FA] w-[60px] text-center">
                    £ {item.total.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-[27px] px-[32px] pb-[21px] flex justify-between items-center bg-[#373B53] dark:bg-[#0C0E16] rounded-b-[8px]">
        <p className="font-medium text-[13px] leading-[18px] tracking-[-1px] text-[#FFFFFF]">
          Amount Due
        </p>
        <h2 className="font-bold text-[24px] leading-[32px] tracking-[-0.5px]  text-[#FFFFFF]">
          £ {totalPrice.toFixed(2)}
        </h2>
      </div>
    </div>
  );
}
