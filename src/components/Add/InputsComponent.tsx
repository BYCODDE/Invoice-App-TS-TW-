import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
// import { IInvoices } from "../../App";

interface CustomInputProps {
	id1: string;
	defaultValue1: string;
	register1: UseFormRegisterReturn;
	id2: string;
	defaultValue2: string;
	register2: UseFormRegisterReturn;
	inputTitle1: string;
	inputTitle2: string;
	inputTitle: string;
	register3: UseFormRegisterReturn;
	id3: string;
	defaultValue3: string;
	error1: any;
	// errors: FieldErrors<IInvoices>;
	// senderCityError?: FieldError | undefined;
	// senderPostCodeError?: FieldError | undefined;
	// senderCountryError?: FieldError | undefined;
	// clientCityError?: FieldError | undefined;
	// clientPostCodeError?: FieldError | undefined;
	// clientCountryError?: FieldError | undefined;
}

const InputsComponent: React.FC<CustomInputProps> = ({
	id1,
	defaultValue1,
	register1,
	id2,
	defaultValue2,
	register2,
	inputTitle1,
	inputTitle2,
	inputTitle,
	id3,
	register3,
	defaultValue3,
	error1,
	// errors,
	// senderCityError,
	// senderPostCodeError,
	// senderCountryError,
	// clientCityError,
	// clientPostCodeError,
	// clientCountryError,
}) => {
	console.log(error1);
	return (
		<div className="md:flex items-center gap-[20px]  box-border">
			<div className={`flex gap-[20px] py-[30px] box-border`}>
				<div
					className={`flex ${error1 && "bg-[red]"} flex-col items-start justify-center gap-[10px] w-[152px] h-[48px]`}
				>
					{error1 && <p>{error1.message}</p>}
					<label
						className="text-[#7E88C3] cursor-pointer font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
						htmlFor={id1}
					>
						{inputTitle1}
					</label>
					<input
						className="cursor-pointer w-[152px] h-[48px] flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139] dark:text-white dark:border-none"
						id={id1}
						defaultValue={defaultValue1 || ""}
						{...register1}
					/>
				</div>

				<div className="flex flex-col items-start justify-center gap-[10px] w-[152px] h-[48px]">
					<label
						className="text-[#7E88C3] cursor-pointer text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
						htmlFor={id2}
					>
						{inputTitle2}
					</label>
					<input
						className="w-[152px] cursor-pointer h-[48px] flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
						id={id2}
						defaultValue={defaultValue2 || ""}
						{...register2}
					/>
				</div>
			</div>

			<div
				className={`flex flex-col items-start justify-center gap-[10px] w-[327px] md:w-[152px]  box-border py-[10px] `}
			>
				<label
					className="text-[#7E88C3] font-league-spartan text-[13px] font-medium leading-4 tracking-tight pl-[5px]"
					htmlFor={id3}
				>
					{inputTitle}
				</label>
				<input
					className="cursor-pointer md:w-[152px] w-[327px] h-[48px] rounded-md border border-gray-300 bg-white font-league-spartan text-[13px] font-bold leading-4 tracking-tight px-[20px] dark:bg-[#1E2139] dark:text-white dark:border-none"
					id={id3}
					defaultValue={defaultValue3 || ""}
					{...register3}
				/>
			</div>
		</div>
	);
};

export default InputsComponent;
