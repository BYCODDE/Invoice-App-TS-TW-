import React from "react";

function AddInvoicesButtons() {
  return (
    <div>
      {" "}
      <div className="flex py-[20px] gap-[10px]  w-full justify-end  ">
        <button className="w-[84px] h-[48px] cursor-pointer flex-shrink-0 rounded-full  dark:text-white dark:bg-[#252945] bg-[#F9FAFE] text-[#7E88C3] font-league-spartan text-[13px] font-bold leading-15 tracking-tighter">
          Discard
        </button>
        <button className="w-[96px] h-[48px] dark:bg-[#373B53]  dark:text-white cursor-pointer flex-shrink-0 rounded-full bg-[#373B53] text-[#888EB0] text-center font-league-spartan text-[13px] font-bold leading-15 tracking-tighter">
          Save As Draft
        </button>
        <input
          type="submit"
          className="w-[138px] h-[48px] cursor-pointer flex-shrink-0 rounded-full bg-purple-600 text-white font-league-spartan text-[15px] font-bold leading-15 tracking-tighter"
          value="Save & Send"
        />
      </div>
    </div>
  );
}

export default AddInvoicesButtons;
