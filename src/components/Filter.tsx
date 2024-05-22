import arrowDown from "/public/assets/icon-arrow-down.svg";
import plus from "/public/assets/icon-plus.svg";
import check from "/public/assets/icon-check.svg";
import { ChangeEvent, useContext, useState } from "react";
import { IInvoices } from "../types/types";
import { InvoiceContext } from "../App";

interface FilterProps {
	invoices: IInvoices[];
	setInfo: React.Dispatch<React.SetStateAction<(never | string)[]>>;
}

function Filter({ invoices, setInfo }: FilterProps) {
	const [filtered, setFiltered] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [isChecked2, setIsChecked2] = useState(false);
	const [isChecked3, setIsChecked3] = useState(false);

	const handleInvoice = (
		event: ChangeEvent<HTMLInputElement>,
		status: string,
	) => {
		if (event.target.checked) {
			setInfo((info) => [...info, status]);
		} else {
			setInfo((info) => info.filter((item) => item !== status));
		}
	};

	const handleFilter = function () {
		setFiltered(!filtered);
	};

	const { setShowAddInvoice } = useContext(InvoiceContext);
	return (
		<div className="xl:p-[20px]	xl:max-w-[720px] w-[100%] justify-between  xl:mt-[0px] md:mt-[60px] text-black font-bold  text-[15px] flex  items-center ">
			<div className="flex justify-center flex-col ">
				<span className="     md:text-[35px]    dark:text-whiteTwo text-[32px] font-bold">
					Invoices
				</span>
				<span className="md:hidden   text-grey text-[13px] dark:text-[#DFE3FA] font-medium ">
					{invoices.length} invoices
				</span>
				<span className="md:block   text-grey text-[13px] dark:text-[#DFE3FA] hidden font-medium">
					{invoices.length > 0
						? `There are ${invoices.length} total invoices`
						: `No invoices`}
				</span>
			</div>
			<div className="flex">
				<div className="cursor-pointer flex justify-center items-center relative">
					<span
						onClick={handleFilter}
						className="block md:hidden dark:text-whiteTwo"
					>
						Filter
					</span>
					<span
						onClick={handleFilter}
						className="hidden md:block dark:text-whiteTwo"
					>
						Filter by status
					</span>
					<img
						onClick={handleFilter}
						className={`m-[16px] ${filtered ? "rotate-180" : ""}`}
						src={arrowDown}
						alt="arrowDown"
					/>
					<div
						className={` ${
							filtered ? "block" : "hidden"
						}  dark:bg-blackTwo top-[50px] gap-[19px] flex p-[24px] pr-[60px] absolute w-[170px] md:max-w-[192px] max-h-[128px] rounded-[8px] bg-whiteTwo shadow-custom2`}
					>
						<div className="cursor-pointer    gap-[11px]  flex justify-center flex-col">
							<label className="relative text-[#7E88C3] cursor-pointer flex items-center gap-[8px]">
								<input
									type="checkbox"
									className="   appearance-none w-[16px] h-[16px] border hover:border-solid hover:border-blue rounded-[2px] cursor-pointer checked:bg-blue  border-none bg-whiteThree dark:bg-blackThree dark:checked:bg-blue"
									id="draft"
									onClick={() => setIsChecked(!isChecked)}
									onChange={(event) => handleInvoice(event, "draft")}
								/>
								<img
									style={{
										display: isChecked ? "block" : "none",
									}}
									className="absolute w-[10px] h-[10px] top-[7px] left-[3px] pointer-events-none"
									src={check}
									alt="check"
								/>
								<span className="dark:text-whiteTwo  text-black">Draft</span>
							</label>
							<label className="relative text-[#7E88C3] cursor-pointer flex items-center gap-[8px]">
								<input
									type="checkbox"
									className="dark:bg-blackThree dark:checked:bg-blue  appearance-none w-[16px] h-[16px] border hover:border-solid hover:border-blue rounded-[2px] cursor-pointer checked:bg-blue  border-none bg-whiteThree  "
									id="pending"
									onClick={() => setIsChecked2(!isChecked2)}
									onChange={(event) => handleInvoice(event, "pending")}
								/>
								<img
									style={{
										display: isChecked2 ? "block" : "none",
									}}
									className="absolute w-[10px] h-[10px] top-[7px] left-[3px] pointer-events-none"
									src={check}
									alt="check"
								/>
								<span className="dark:text-whiteTwo text-black">Pending</span>
							</label>
							<label className="relative text-[#7E88C3] cursor-pointer flex items-center gap-[8px]">
								<input
									type="checkbox"
									className="  dark:bg-blackThree dark:checked:bg-blue  appearance-none w-[16px] h-[16px] border hover:border-solid hover:border-blue rounded-[2px] cursor-pointer checked:bg-blue  border-none bg-whiteThree "
									id="paid"
									onClick={() => setIsChecked3(!isChecked3)}
									onChange={(event) => handleInvoice(event, "paid")}
								/>
								<img
									style={{
										display: isChecked3 ? "block" : "none",
									}}
									className="       absolute w-[10px] h-[10px] top-[7px] left-[3px] pointer-events-none"
									src={check}
									alt="check"
								/>
								<span className="dark:text-whiteTwo text-black">Paid</span>
							</label>
						</div>
					</div>
				</div>
				<div
					className="   md:w-[150px]     cursor-pointer   flex justify-center items-center w-[90px]  h-[44px] rounded-[24px] bg-blue gap-[9px]"
					onClick={() => setShowAddInvoice(true)}
				>
					<div className="w-[32px] h-[32px] rounded-[50%] bg-white flex justify-center items-center">
						<img className="w-[10px] h-[10px]" src={plus} alt="plus" />
					</div>

					<span className="text-white md:hidden block">New</span>
					<span className="text-white  md:block    hidden">New Invoice</span>
				</div>
			</div>
		</div>
	);
}
export default Filter;
