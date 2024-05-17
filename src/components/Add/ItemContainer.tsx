import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
interface CustomInputProps {
  id1: string;
  defaultValue1: number;
  register1: UseFormRegisterReturn;
  id2: string;
  defaultValue2: number;
  register2: UseFormRegisterReturn;
  inputTitle1: string;
  inputTitle2: string;
  handleBinClick: () => void;
}
const ItemContainer: React.FC<CustomInputProps> = ({
  id1,
  defaultValue1,
  register1,
  id2,
  defaultValue2,
  register2,
  inputTitle1,
  inputTitle2,
  handleBinClick,
}) => {
  console.log(defaultValue1);
  return (
    <div className="flex gap-[20px] py-[30px] box-border">
      <div className="flex flex-col items-start justify-center gap-[10px]  w-[64px] h-[48px] ">
        <label
          className="text-label-text-color cursor-pointer font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
          htmlFor={id1}
        >
          {inputTitle1}
        </label>
        <input
          className="  w-[64px] h-[48px] flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
          id={id1}
          defaultValue={defaultValue1 || ""}
          {...register1}
        />
      </div>

      <div className="flex flex-col items-start justify-center gap-[10px] w-[100px] h-[48px] box-border">
        <label
          className="cursor-pointer text-label-text-color text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
          htmlFor={id2}
        >
          {inputTitle2}
        </label>
        <input
          className=" w-[100px] h-[48px] flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
          id="SenderZipCode "
          defaultValue={defaultValue2 || ""}
          {...register2}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-[10px] w-[80px] h-[48px] box-border">
        <label className="cursor-pointer text-label-text-color text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3">
          Total
        </label>
        <p className=" w-[80px] h-[48px] flex  items-center  flex-shrink-0 rounded-md  bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none">
          {defaultValue2 * defaultValue1}
        </p>
      </div>
      <div
        onClick={handleBinClick}
        className=" h-[48px] flex  items-center pt-[14px]"
      >
        <img
          className="w-[12px] h-[16px] flex cursor-pointer"
          src="/assets/icon-delete.svg"
          alt="bin"
        />
      </div>
    </div>
  );
};

export default ItemContainer;
