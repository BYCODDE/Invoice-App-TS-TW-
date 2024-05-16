import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CustomInputProps {
  id: string;
  defaultValue: string;
  register:UseFormRegisterReturn; 
  inputTitle:string
  textColor?:string
}

const CustomInput: React.FC<CustomInputProps> = ({ id, defaultValue, register ,inputTitle}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-[20px] w-[327px]  box-border py-[10px] ">
      <label className="text-label-text-color  font-league-spartan text-[13px] font-medium leading-4 tracking-tight pl-[5px]" htmlFor={id}>
      {inputTitle}
      </label>
      <input
     
        className='w-[327px] h-[48px]  rounded-md border border-gray-300 bg-white  text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-[20px] dark:bg-[#1E2139] dark:text-white dark:border-none'
        id={id}
        defaultValue={defaultValue || ""}
        {...register}
      />
    </div>
  );
};

export default CustomInput;
