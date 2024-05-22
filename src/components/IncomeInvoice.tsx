import dateFormat from "dateformat";
import { IInvoices } from "../types/types";
import { useMediaQuery } from "@uidotdev/usehooks";
import IncomeInvoiceStatus from "./IncomeInvoiceStatus";
import arrowRight from "/public/assets/icon-arrow-right.svg";
import { useEffect, useState } from "react";
interface IncomeInvoiceProps {
	item: IInvoices;
}

const IncomeInvoice: React.FC<IncomeInvoiceProps> = ({ item }) => {
	const inputDate = item.paymentDue;
	const dateObject = inputDate ? new Date(inputDate) : new Date();
	const formattedDate = dateFormat(dateObject, "Due d mmm yyyy");
	const [finalAmount, setFinalAmount] = useState(0);
	const formattedAmount = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	}).format(finalAmount);

	useEffect(() => {
		let calculatedTotalPrice = 0;
		if (item?.items) {
			for (let i = 0; i < item.items.length; i++) {
				calculatedTotalPrice += item.items[i].total;
			}
		}
		setFinalAmount(calculatedTotalPrice);
	}, [item]);
	const isMd = useMediaQuery("(min-width: 768px)");

	return (
		<div
			className={`	xl:max-w-[720px]	ml:max-h-[72px]	md:justify-between md:items-center	md:max-h-[72px] md:flex-row dark:bg-[#1E2139] 	text-[15px]		flex flex-col p-[24px] w-[100%] h-[100%] rounded-[8px] mt-[32px] bg-whiteTwo`}
		>
			{!isMd ? (
				<>
					<div className="font-bold flex justify-between">
						<div className="mb-[24px] dark:text-whiteTwo">
							<span className="text-sky">#</span>
							{item.id}
						</div>
						<span className="dark:text-whiteTwo text-skyTwo font-[500]">
							{item.clientName}
						</span>
					</div>
					<div className="flex justify-between ">
						<div>
							<span className="dark:text-[#DFE3FA] text-skyTwo font-[500]">
								{" "}
								{formattedDate}
							</span>
							<h3 className="dark:text-whiteTwo font-bold text-black mt-[9px]">
								{formattedAmount}
							</h3>
						</div>

						<IncomeInvoiceStatus item={item} />
					</div>
				</>
			) : (
				<>
					<div className="font-bold dark:text-whiteTwo">
						<span className="text-sky dark:text-grey">#</span>
						{item.id}
					</div>
					<span className="dark:text-[#DFE3FA] text-skyTwo font-[500]">
						{" "}
						{formattedDate}
					</span>
					<span className="dark:text-whiteTwo text-skyTwo font-[500]">
						{item.clientName}
					</span>
					<h3 className="dark:text-whiteTwo font-bold text-black ">
						{formattedAmount}
					</h3>
					<div className="flex justify-center items-center gap-[20px]">
						<IncomeInvoiceStatus item={item} />
						<img src={arrowRight} alt="arrow-right" />
					</div>
				</>
			)}
		</div>
	);
};

export default IncomeInvoice;
