import { IInvoices } from "../types/types";

interface IncomeInvoiceStatusProps {
	item: IInvoices;
}

export default function IncomeInvoiceStatus({
	item,
}: IncomeInvoiceStatusProps) {
	return (
		<>
			<div
				className={`${
					item.status?.name === "Paid"
						? "bg-green"
						: item.status?.name === "Pending"
							? "bg-yellow"
							: item.status?.name === "Draft"
								? "bg-Draft dark:bg-[#292C44]"
								: ""
				} bg-opacity-5 flex justify-center items-center gap-[6px] pt-[17px] pl-[30px] pr-[30px] pb-[15px] max-w-[104px] max-h-[40px] rounded-[6px]`}
			>
				<div
					className={`${
						item.status?.name === "Paid"
							? "bg-green"
							: item.status?.name === "Pending"
								? "bg-yellow p-[4px]"
								: item.status?.name === "Draft"
									? "bg-Draft p-[4px] dark:bg-[#DFE3FA]"
									: ""
					} w-[8px] h-[8px] rounded-[50%]`}
				></div>
				<div
					className={`${
						item.status?.name === "Paid"
							? "text-green"
							: item.status?.name === "Pending"
								? "text-yellow"
								: item.status?.name === "Draft"
									? "dark:text-[#DFE3FA] text-Draft"
									: ""
					} font-bold`}
				>
					{item.status?.name}
				</div>
			</div>
		</>
	);
}
