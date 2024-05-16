import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CustomInputProps {
  id: string;
  defaultValue: string;
  register:UseFormRegisterReturn; 
  inputTitle:string
}

const CustomInput: React.FC<CustomInputProps> = ({ id, defaultValue, register ,inputTitle}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-3 w-327 box-border">
      <label className="text-custom-gray font-league-spartan text-xs font-medium leading-4 tracking-tight pl-3" htmlFor={id}>
      {inputTitle}
      </label>
      <input
        className="w-80 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3"
        id={id}
        defaultValue={defaultValue || ""}
        {...register}
      />
    </div>
  );
};

export default CustomInput;
