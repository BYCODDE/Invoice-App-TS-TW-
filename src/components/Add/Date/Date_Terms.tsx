import { UseFormRegisterReturn } from "react-hook-form";

interface CustomInputProps {
  id1: string;
  defaultValue1: string;
  register1: UseFormRegisterReturn;
  id2: string;
  defaultValue2: string;
  register2: UseFormRegisterReturn;
  inputTitle1: string;
  inputTitle2: string;
  color: string;
}
const DateTerms: React.FC<CustomInputProps> = ({
  id1,
  defaultValue1,
  register1,
  id2,
  defaultValue2,
  register2,
  inputTitle1,
  inputTitle2,
  color,
}) => {
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-[40px] py-[30px] box-border w-full">
        <div className="flex flex-col  items-start justify-center gap-[10px] w-[327px] md:w-[240px] h-[48px] ">
          <label
            className="text-label-text-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
            htmlFor={id1}
          >
            {inputTitle2}
          </label>
          <input
            style={{ opacity: color }}
            className="w-[327px] md:w-[240px] h-[48px] flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
            id={id1}
            defaultValue={defaultValue1 || ""}
            {...register1}
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-[10px] w-[327px] md:w-[240px] h-[48px] box-border">
          <label
            className=" text-label-text-color text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
            htmlFor={id2}
          >
            {inputTitle1}
          </label>
          <input
            className="w-[327px] md:w-[240px] h-[48px] flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
            id="SenderZipCode "
            defaultValue={defaultValue2 || ""}
            {...register2}
          />
        </div>
      </div>
    </div>
  );
};

export default DateTerms;
