import React from "react";

function EditInvoicesButtons() {
  return (
    <div className="flex py-[20px] gap-[10px]  w-full justify-end  ">
      <button className="w-[96px] h-[48px] dark:bg-[#1E2139]  dark:text-white cursor-pointer flex-shrink-0 rounded-full bg-gray-100 text-gray-700 text-center font-league-spartan text-[15px] font-bold leading-15 tracking-tighter">
        Cancel
      </button>
      <input
        type="submit"
        className="w-[138px] h-[48px] cursor-pointer flex-shrink-0 rounded-full bg-purple-600 text-white font-league-spartan text-[15px] font-bold leading-15 tracking-tighter"
        value="Save Changes"
      />
    </div>
  );
}

export default EditInvoicesButtons;
