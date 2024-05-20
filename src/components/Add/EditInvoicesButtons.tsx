import React, { useContext } from "react";
import { InvoiceContext } from "../../App";

function EditInvoicesButtons() {
	const { setShowEditInvoice } = useContext(InvoiceContext);
	return (
		<div className="flex py-[20px] gap-[10px]  w-full justify-end md:mr-[80px]  ">
			<button
				onClick={() => setShowEditInvoice(false)}
				className="w-[96px] h-[48px] dark:bg-[#1E2139]  dark:text-white cursor-pointer flex-shrink-0 rounded-full bg-gray-100 text-gray-700 text-center font-league-spartan text-[15px] font-bold leading-15 tracking-tighter"
			>
				Cancel
			</button>
			<button
				type="submit"
				className="w-[138px] h-[48px] cursor-pointer flex-shrink-0 rounded-full bg-purple-600 text-white font-league-spartan text-[15px] font-bold leading-15 tracking-tighter"
			>
				Save Changes
			</button>
		</div>
	);
}

export default EditInvoicesButtons;