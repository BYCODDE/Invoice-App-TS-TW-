import { useEffect, useState } from "react";
import { IInvoices } from "../types/types";

interface InvoicePaymentInfoProps {
	choosenInvoice: IInvoices | null;
}

export default function InvoicePaymentInfo({
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
		<div>
			<div className="bg-[#F9FAFE] dark:bg-[#252945] pt-[25px] px-[24px] pb-[23px] rounded-t-[8px] flex flex-col gap-[24px] mt-[38px]">
				{choosenInvoice?.items.map((item, index) => {
					return (
						<div className="flex justify-between items-center" key={index}>
							<div className="flex flex-col gap-[8px]">
								<p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
									{item.name}
								</p>
								<p className="text-[#7E88C3] dark:text-[#DFE3FA] font-medium text-[15px] leading-[18px] tracking-[-0.1px]">
									{item.quantity} x £ {item.price}
								</p>
							</div>
							<p className="text-[#0C0E16] dark:text-[#fff] font-bold text-[15px] leading-[20px] tracking-[-0.25px]">
								£ {item.total}
							</p>
						</div>
					);
				})}
			</div>

			<div className="pt-[26px] px-[24px] pb-[22px] bg-[#373B53] dark:bg-[#0C0E16] rounded-b-[8px] flex justify-between items-center">
				<p className="font-medium text-[13px] leading-[18px] tracking-[-1px] text-[#FFFFFF]">
					Amount Due
				</p>
				<h2 className="font-bold text-[24px] leading-[32px] tracking-[-0.5px]  text-[#FFFFFF]">
					£ {totalPrice}
				</h2>
			</div>
		</div>
	);
}
