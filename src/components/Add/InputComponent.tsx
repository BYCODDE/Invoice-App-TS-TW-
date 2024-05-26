import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface CustomInputProps {
	id: string;
	defaultValue: string;
	register: UseFormRegisterReturn;
	inputTitle: string;
	textColor?: string;
	type?: string;
	color?: string;
	optimalError: FieldError | undefined;
}

const CustomInput: React.FC<CustomInputProps> = ({
	id,
	defaultValue,
	register,
	inputTitle,

	optimalError,
}) => {
	return (
		<div className="  flex flex-col cursor-pointer  items-start justify-center gap-[20px] w-[327px] md:w-[504px]  box-border py-[10px] ">
			<div className="flex w-full justify-between">
				<label
					className={`text-[#7E88C3] ${optimalError && "text-[red]"} cursor-pointer font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3`}
					htmlFor={id}
				>
					{inputTitle}
				</label>
				{optimalError && (
					<p className="text-[red]  font-league-spartan text-[10px] leading-4 tracking-tight  text-left  py-1">
						{optimalError.message}
					</p>
				)}
			</div>
			<input
				// style={{ opacity: 0.5 }}
				className={`cursor-pointer ${optimalError && "border-[1px] border-solid border-[red]"}  w-full h-[48px] flex-shrink-0 rounded-md border-[1px] border-solid border-[#DFE3FA] bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139] dark:text-white dark:border-none`}
				id={id}
				defaultValue={defaultValue || ""}
				{...register}
			/>
		</div>
	);
};

export default CustomInput;
