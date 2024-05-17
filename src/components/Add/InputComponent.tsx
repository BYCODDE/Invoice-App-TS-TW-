import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomInputProps {
  id: string;
  defaultValue: string;
  register: UseFormRegisterReturn;
  inputTitle: string;
  textColor?: string;
  type?: string;
  color?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  defaultValue,
  register,
  inputTitle,
  //   type,
  color,
}) => {
  return (
    <div className="flex flex-col  items-start justify-center gap-[20px] w-[327px] md:w-[504px]  box-border py-[10px] ">
      <label
        className="text-label-text-color  font-league-spartan text-[13px] font-medium leading-4 tracking-tight pl-[5px]"
        htmlFor={id}
      >
        {inputTitle}
      </label>
      <input
        style={{ opacity: color }}
        className={`w-[327px] h-[48px] rounded-md border border-gray-300 bg-white md:w-[504px]  font-league-spartan text-[13px] font-bold leading-4 tracking-tight px-[20px] dark:bg-[#1E2139] dark:text-white dark:border-none`}
        id={id}
        defaultValue={defaultValue || ""}
        {...register}
      />
    </div>
  );
};

export default CustomInput;
