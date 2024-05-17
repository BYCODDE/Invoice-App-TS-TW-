import React, { useContext } from "react";
import { InvoiceContext } from "../../App";

function AddNewItemButton() {
  const { setShowAddInvoice } = useContext(InvoiceContext);
  return (
    <div className=" cursor-pointer w-[327px] h-[48px] bg-[#F9FAFE] dark:bg-[#1E2139] flex  items-center justify-center rounded-full mt-[15px] mb-[50px]">
      <button
        onClick={() => setShowAddInvoice(true)}
        className="text-[#7E88C3] text-[15px] font-bold"
      >
        <span className="px-[9px]">+</span>Add New Item
      </button>
    </div>
  );
}

export default AddNewItemButton;
