import arrowDown from "/public/assets/icon-arrow-down.svg";
import plus from "/public/assets/icon-plus.svg";
import check from "/public/assets/icon-check.svg"
import { IInvoices } from "../pages/Invoices";
import { useState } from "react";

interface FilterProps {
  invoices: IInvoices[];
}

const Filter: React.FC<FilterProps> = ({ invoices }) => {
  const [filtered, setFiltered] = useState(false);

  const handleFilter = function () {
    setFiltered(!filtered);
  };

  return (
    <div className="text-black font-bold  text-[15px] flex justify-center items-center gap-[86px]">
      <div className="flex justify-center flex-col">
        <span className="dark:text-whiteTwo     text-[32px]">Invoices</span>
        <span className="text-grey text-[13px] dark:text-[#DFE3FA]">
          {invoices.length} invoices
        </span>
      </div>
      <div className="flex">
        <div className="       cursor-pointer  flex justify-center items-center">
          <span onClick={handleFilter} className="dark:text-whiteTwo">
            Filter
          </span>
          <img
            onClick={handleFilter}
            className={`m-[16px] ${filtered ? "rotate-180" : ""}`}
            src={arrowDown}
            alt="arrowDown"
          />
          <div
            className={` ${
              filtered ? "block" : "hidden"
            }       top-[85px] gap-[19px] flex p-[24px] pr-[60px] absolute  max-w-[192px] max-h-[128px] rounded-[8px] bg-whiteTwo shadow-custom2`}
          >
            <div className="cursor-pointer    gap-[11px]  flex justify-center flex-col">
            <label className="relative cursor-pointer flex items-center gap-[8px]">
                <input
                  type="checkbox"
                  className="appearance-none w-[16px] h-[16px] border border-solid border-blue rounded-[2px] cursor-pointer checked:bg-blue"
                  id="draft"
                />
                <img
                  className="absolute w-[10px] h-[10px] top-[7px] left-[3px] pointer-events-none"
                  src={check}
                  alt="check"
                />
                <span>Draft</span>
              </label>
              <label className="relative cursor-pointer flex items-center gap-[8px]">
                <input
                  type="checkbox"
                  className="appearance-none w-[16px] h-[16px] border border-solid border-blue rounded-[2px] cursor-pointer checked:bg-blue"
                  id="pending"
                />
                <img
                  className="absolute w-[10px] h-[10px] top-[7px] left-[3px] pointer-events-none"
                  src={check}
                  alt="check"
                />
                <span>Pending</span>
              </label>
              <label className="relative cursor-pointer flex items-center gap-[8px]">
                <input
                  type="checkbox"
                  className="appearance-none w-[16px] h-[16px] border border-solid border-blue rounded-[2px] cursor-pointer checked:bg-blue"
                  id="paid"
                />
                <img
                  className="absolute w-[10px] h-[10px] top-[7px] left-[3px] pointer-events-none"
                  src={check}
                  alt="check"
                />
                <span>Paid</span>
              </label>
            </div>
          </div>
        </div>
        <div className="cursor-pointer   flex justify-center items-center w-[90px]  h-[44px] rounded-[24px] bg-blue gap-[9px]">
          <div className="w-[32px] h-[32px] rounded-[50%] bg-white flex justify-center items-center">
            <img className="w-[10px] h-[10px]" src={plus} alt="plus" />
          </div>
          <span className="text-white">New</span>
        </div>
      </div>
    </div>
  );
};
export default Filter;
