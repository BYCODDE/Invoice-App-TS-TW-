import { IInvoices } from "../types/types";
import InvoiceDetailsButtons from "./InvoiceDetailsButtons";

interface InvoiseStatusInfoProps {
	choosenInvoice: IInvoices | null;
}

export default function InvoiceStatusInfo({
	choosenInvoice,
}: InvoiseStatusInfoProps) {
	const statusColorBackground =
		choosenInvoice?.status?.name === "Paid"
			? "rgba(51,	214, 159, 0.0571)"
			: choosenInvoice?.status?.name === "Pending"
				? "rgba(255, 145, 0, 0.0571)"
				: choosenInvoice?.status?.name === "Draft"
					? "rgba(55,	59,	83, 0.0571)"
					: "";

	const statusColorText =
		choosenInvoice?.status?.name === "Paid"
			? "rgb(51,	214, 159)"
			: choosenInvoice?.status?.name === "Pending"
				? "rgb(255, 145, 0)"
				: choosenInvoice?.status?.name === "Draft"
					? "rgb(55,	59,	83)"
					: "";

	return (
		<div className="md:flex md:justify-between md:bg-[#FFFFFF] md:dark:bg-[#1E2139] md:mt-[31px] md:py-[20px] md:px-[32px] md:rounded-[8px]">
			<div className="bg-[#FFFFFF] dark:bg-[#1E2139] pt-[24px] pb-[27px] px-[24px] mt-[31px] flex justify-between items-center rounded-[8px] md:justify-start md:p-0 md:m-0 md:gap-[20px]">
				<p className="text-[#858BB2] dark:text-[#DFE3FA] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
					Status
				</p>
				<div
					className="flex gap-[8px] items-center pt-[14px] pb-[11px] w-[104px] justify-center  rounded-[6px]"
					style={{ background: statusColorBackground }}
				>
					<div
						className="w-[8px] h-[8px] rounded-full  mb-[2px]"
						style={{ background: statusColorText }}
					></div>
					<p
						className="font-bold text-[15px] leading-[15px] tracking-[-0.25px]"
						style={{ color: statusColorText }}
					>
						{choosenInvoice?.status?.name}
					</p>
				</div>
			</div>
			<div className="hidden md:block">
				<InvoiceDetailsButtons />
			</div>
		</div>
	);
}
