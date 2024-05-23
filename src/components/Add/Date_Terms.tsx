import React, { useContext, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
	UseFormRegisterReturn,
	Controller,
	UseFormSetValue,
	Control,
} from "react-hook-form";
import { IInvoices } from "../../types/types";
import { InvoiceContext } from "../../App";

interface CustomInputProps {
	id1: string;
	defaultValue1: string;
	defaultValue2: string;
	register1: UseFormRegisterReturn;
	id2: string;
	setValue: UseFormSetValue<IInvoices>;
	control: Control<IInvoices>;
	register2: UseFormRegisterReturn;
	setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
	selectedDate: Date | null;
	inputTitle1: string;
	inputTitle2: string;
}

const DateTerms: React.FC<CustomInputProps> = ({
	id1,
	defaultValue2,
	register1,
	id2,
	setSelectedDate,
	selectedDate,
	inputTitle1,
	inputTitle2,
	setValue,
	control,
}) => {
	const termsArray = [
		{ label: "Net 1 Day", value: 1 * 24 * 60 * 60 * 1000 },
		{ label: "Net 7 Days", value: 7 * 24 * 60 * 60 * 1000 },
		{ label: "Net 14 Days", value: 14 * 24 * 60 * 60 * 1000 },
		{ label: "Net 30 Days", value: 30 * 24 * 60 * 60 * 1000 },
	];

	const { term, setTerm } = useContext(InvoiceContext);
	const [showTerms, setShowTerms] = useState(false);
	const datePickerRef = useRef<DatePicker | null>(null);

	const handleIconClick = () => {
		datePickerRef.current?.setOpen(true);
	};

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
		if (date) {
			const formattedDate = `${date.getDate()} ${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`;
			setValue("createdAt", formattedDate);
		} else {
			setValue("createdAt", "");
		}
	};

	return (
		<div>
			<div className="flex md:flex-row flex-col gap-[40px] py-[30px] box-border w-full">
				<div className="flex flex-col items-start justify-center gap-[10px] w-[327px] md:w-[240px] h-[48px]">
					<label
						className="text-[#7E88C3] cursor-pointer font-league-spartan text-[13px] py-3 font-medium leading-4 tracking-tight px-3"
						htmlFor={id2}
					>
						{inputTitle2}
					</label>
					<div className="relative">
						<span
							className="absolute cursor-pointer z-50 top-[15px] right-[10px]"
							onClick={handleIconClick}
						>
							<img src="/assets/icon-calendar.svg" alt="calendar icon" />
						</span>

						<div onClick={() => setShowTerms(false)}>
							<Controller
								name="createdAt"
								control={control}
								defaultValue={defaultValue2 || ""}
								render={({ field }) => (
									<DatePicker
										id={id2}
										selected={selectedDate}
										onChange={(date: Date | null) => {
											field.onChange(date);
											handleDateChange(date);
										}}
										ref={datePickerRef}
										dateFormat="d MMM yyyy"
										placeholderText="Click to select a date"
										className="cursor-pointer border-[1px] border-solid border-[#DFE3FA] p-2 rounded w-[327px] md:w-[240px] h-[48px] font-league-spartan text-[15px] font-bold leading-4 tracking-tight pl-[20px] dark:bg-[#1E2139] dark:text-white dark:border-none"
									/>
								)}
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
							className="text-[#7E88C3] cursor-pointer py-3 text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
							htmlFor={id1}
						>
							{inputTitle1}
						</label>
						<input
							className="w-[327px] cursor-pointer md:w-[240px] h-[48px] flex-shrink-0 rounded-md border-[1px] border-solid border-[#DFE3FA] bg-white text-custom-color font-league-spartan text-[15px] font-bold leading-4 tracking-tight pl-[20px] dark:bg-[#1E2139] dark:text-white dark:border-none"
							id={id1}
							value={
								termsArray.find((item) => item.value === term)?.label || ""
							}
							{...register1}
							readOnly
						/>
					</div>
					{showTerms && (
						<div className="absolute top-[70px] w-[240px] bg-white rounded-lg shadow-[0px_10px_20px_0px_rgba(72,84,159,0.25)]">
							{termsArray.map((item, index) => (
								<div
									key={index}
									onClick={() => setTerm(item.value)}
									className="h-[48px] hover:text-[#7C5DFA] dark:text-white text-[15px] py-[18px] pl-[20px] tracking-[-0.25px] font-bold leading-[15px] cursor-pointer border-b-[1px] border-b-[#DFE3FA] dark:border-b-[#1E2139] dark:bg-[#252945]"
								>
									{item.label}
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
