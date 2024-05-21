import dateFormat from "dateformat";
import { IInvoices } from "../types/types";
import { useMediaQuery } from "@uidotdev/usehooks";
import IncomeInvoiceStatus from "./IncomeInvoiceStatus";

interface IncomeInvoiceProps {
	item: IInvoices;
}

const IncomeInvoice: React.FC<IncomeInvoiceProps> = ({ item }) => {
	const inputDate = item.paymentDue;
	const dateObject = inputDate ? new Date(inputDate) : new Date();
	const formattedDate = dateFormat(dateObject, "Due d mmm yyyy");

	const formattedAmount = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	}).format(item.total);

	const isMd = useMediaQuery("(min-width: 768px)");

	return (
		<div
			className={`md:flex-row dark:bg-[#1E2139] flex flex-col p-[24px] w-[100%] h-[100%] rounded-[8px] mt-[32px] bg-whiteTwo`}
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
					<div className="flex justify-between">
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
					<span className="text-sky">#</span>
					{item.id}
					<span className="dark:text-whiteTwo text-skyTwo font-[500]">
						{item.clientName}
					</span>
					<span className="dark:text-[#DFE3FA] text-skyTwo font-[500]">
						{" "}
						{formattedDate}
					</span>
					<h3 className="dark:text-whiteTwo font-bold text-black mt-[9px]">
						{formattedAmount}
					</h3>

					<IncomeInvoiceStatus item={item} />
				</>
			)}
		</div>
	);
};

export default IncomeInvoice;
