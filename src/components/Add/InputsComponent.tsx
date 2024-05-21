import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

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
	cityError: FieldError | undefined;
	postCodeError: FieldError | undefined;
	CountryError: FieldError | undefined;
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
	cityError,
	postCodeError,
	CountryError,
}) => {
	return (
		<div className="md:flex items-center gap-[20px]  box-border">
			<div className={`flex gap-[20px] py-[30px] box-border`}>
				<div
					className={`flex  flex-col items-start justify-center gap-[10px] w-[152px] h-[48px]`}
				>
					<div className="flex w-full justify-between">
						<label
							className={`text-[#7E88C3] ${cityError && "text-[red]"} cursor-pointer font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3`}
							htmlFor={id1}
						>
							{inputTitle1}
						</label>
						{cityError && (
							<p className="text-[red]  font-league-spartan text-[10px] leading-4 tracking-tight  text-left  py-1">
								{cityError.message}
							</p>
						)}
					</div>
					<input
						className={`cursor-pointer ${cityError && "border-[1px] border-solid border-[red]"}  w-[152px] h-[48px] flex-shrink-0 rounded-md border-[1px] border-solid border-[#DFE3FA] bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139] dark:text-white dark:border-none`}
						id={id1}
						defaultValue={defaultValue1 || ""}
						{...register1}
					/>
				</div>

				<div className="flex flex-col items-start justify-center gap-[10px] w-[152px] h-[48px]">
					<div className="flex w-full justify-between">
						<label
							className={`text-[#7E88C3] ${postCodeError && "text-[red]"} cursor-pointer font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3`}
							htmlFor={id2}
						>
							{inputTitle2}
						</label>
						{postCodeError && (
							<p className="text-[red]  font-league-spartan text-[10px] leading-4 tracking-tight  text-left  py-1">
								{postCodeError.message}
							</p>
						)}
					</div>
					<input
						className={`cursor-pointer ${postCodeError && "border-[1px] border-solid border-[red]"}  w-[152px] h-[48px] flex-shrink-0 rounded-md border-[1px] border-solid border-[#DFE3FA] bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139] dark:text-white dark:border-none`}
						id={id2}
						defaultValue={defaultValue2 || ""}
						{...register2}
					/>
				</div>
			</div>

			<div
				className={`flex flex-col items-start justify-center gap-[10px] w-[327px] md:w-[152px]  box-border py-[10px] `}
			>
				<div className="flex w-full justify-between">
					<label
						className={`text-[#7E88C3] ${CountryError && "text-[red]"} cursor-pointer font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3`}
						htmlFor={id3}
					>
						{inputTitle}
					</label>
					{CountryError && (
						<p className="text-[red]  font-league-spartan text-[10px] leading-4 tracking-tight  text-left  py-1">
							{CountryError.message}
						</p>
					)}
				</div>
				<input
					className={`cursor-pointer ${CountryError && "border-[1px] border-solid border-[red]"}  w-[152px] h-[48px] flex-shrink-0 rounded-md border-[1px] border-solid border-[#DFE3FA] bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139] dark:text-white dark:border-none`}
					id={id3}
					defaultValue={defaultValue3 || ""}
					{...register3}
				/>
			</div>
		</div>
	);
};

export default InputsComponent;
