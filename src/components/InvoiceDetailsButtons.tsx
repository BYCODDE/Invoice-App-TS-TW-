import { useContext } from "react";
import { InvoiceContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";

export default function InvoiceDetailsButtons() {
	const { setIsDeleteOpen, setShowEditInvoice, setInvoices, invoices } =
		useContext(InvoiceContext);

	const { id } = useParams();

	const navigate = useNavigate();

	console.log(invoices);

	function handleMarkPaid() {
		const readIndex = invoices.findIndex((invoice) => invoice.id === id);
		invoices[readIndex].status = "paid";
		setInvoices([...invoices]);
		navigate("/");
	}

	return (
		<div className=" pt-[21px] px-[24px] pb-[22px] bg-[#FFFFFF] dark:bg-[#1E2139] flex items-center justify-center gap-[8px] mt-[56px] md:p-0 md:m-0 ">
			<button
				className="pt-[18px] px-[24px] pb-[15px] bg-[#F9FAFE] dark:bg-[#252945] text-[#7E88C3] dark:text-[#DFE3FA] rounded-[24px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] xl:hover:bg-[#DFE3FA] xl:dark:hover:bg-[#FFFFFF] xl:dark:hover:text-[#7E88C3]"
				onClick={() => setShowEditInvoice(true)}
			>
				Edit
			</button>
			<button
				className="pt-[18px] px-[24px] pb-[15px] bg-[#EC5757] text-[#FFFFFF] rounded-[24px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] xl:hover:bg-[#FF9797]"
				onClick={() => setIsDeleteOpen(true)}
			>
				Delete
			</button>
			<button
				className="pt-[18px] px-[28px] pb-[15px] bg-[#7C5DFA] text-[#FFFFFF] rounded-[24px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] xl:hover:bg-[#9277FF]"
				onClick={handleMarkPaid}
			>
				Mark as Paid
			</button>
		</div>
	);
}
