import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomInputProps {
	id1: string;

	register1: UseFormRegisterReturn;
	id2: string;

	register2: UseFormRegisterReturn;
	inputTitle1: string;
	inputTitle2: string;

	selectedDate: string;
	setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}
const DateTerms: React.FC<CustomInputProps> = ({
	id1,

	register1,
	id2,
	setSelectedDate,
	selectedDate,
	inputTitle1,
	inputTitle2,
}) => {
	const termsArray = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"];
	const [term, setTerm] = useState("Net 30 Days");
	const [showTerms, setShowTerms] = useState(false);
	console.log(term);
	const datePickerRef = useRef<DatePicker | null>(null);
	const handleIconClick = () => {
		datePickerRef.current?.setOpen(true);
	};
	const handleDateChange = (date: string) => {
		setSelectedDate(date);
	};
	return (
		<div>
			<div className="flex md:flex-row flex-col gap-[40px] py-[30px] box-border w-full">
				<div className="flex flex-col  items-start justify-center gap-[10px] w-[327px] md:w-[240px] h-[48px] ">
					<label
						className="text-label-text-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
						htmlFor={id2}
					>
						{inputTitle2}
					</label>
					<div className="relative">
						<span
							className="absolute z-50 top-[15px] right-[10px]"
							onClick={handleIconClick}
						>
							<img src="public/assets/icon-calendar.svg" alt="" />
						</span>

						<div
							onClick={() => setShowTerms(false)}
							className="flex flex-col  items-start justify-center gap-[10px] w-[327px] md:w-[240px] h-[48px] "
						>
							<DatePicker
								selected={selectedDate}
								onChange={handleDateChange}
								ref={datePickerRef}
								dateFormat="d MMM yyyy"
								placeholderText="Click to select a date"
								className="border border-gray-300 p-2 rounded flex flex-col  items-start justify-center gap-[10px] w-[327px] md:w-[240px] h-[48px]   font-league-spartan text-[15px] font-bold leading-4 tracking-tight pl-[20px] dark:bg-[#1E2139]  dark:text-white dark:border-none"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-[20px] relative">
					<div
						onClick={() => setShowTerms(!showTerms)}
						className="flex flex-col items-start justify-center gap-[10px] w-[327px] md:w-[240px] h-[48px] box-border"
					>
						<label
							className=" text-label-text-color text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
							htmlFor={id1}
						>
							{inputTitle1}
						</label>
						<input
							className="w-[327px]  md:w-[240px] h-[48px] flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color  font-league-spartan text-[15px] font-bold leading-4 tracking-tight pl-[20px] dark:bg-[#1E2139]  dark:text-white dark:border-none"
							id={id1}
							value={term || ""}
							{...register1}
						/>
					</div>
					{showTerms && (
						<div className=" absolute top-[70px] w-[240px] bg-white rounded-lg shadow-[0px_10px_20px_0px_rgba(72,84,159,0.25)]">
							{termsArray.map((item, index) => (
								<div
									onClick={() => setTerm(item)}
									key={index}
									className=" h-[48px] hover:text-[#7C5DFA] text-[15px] py-[18px] pl-[20px] tracking-[-0.25px] font-bold leading-[15px] cursor-pointer border-b-[1px] border-b-[#DFE3FA] "
								>
									{item}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DateTerms;
