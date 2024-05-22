import { useContext } from "react";
import { InvoiceContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { IInvoices } from "../types/types";
interface InvoiceDetailsButtonsProps {
	choosenInvoice: IInvoices | null;
}
export default function InvoiceDetailsButtons({
	choosenInvoice,
}: InvoiceDetailsButtonsProps) {
	const {
		setIsDeleteOpen,
		setShowEditInvoice,

		invoices,
		setStatusClick,
	} = useContext(InvoiceContext);

	const { id } = useParams();

	const navigate = useNavigate();

	console.log(invoices);

	// function handleMarkPaid() {
	// 	const readIndex = invoices.findIndex((invoice) => invoice.id === id);
	// 	invoices[readIndex].status?.name = "paid";
	// 	setInvoices([...invoices]);
	// 	navigate("/");
	// }

	async function handleMarkPaid() {
		try {
			const response = await fetch(
				`https://invoice-project-team-5.onrender.com/api/invoice/mark_as_paid/${id}`,
				{
					method: "PATCH",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(choosenInvoice?.status?.name),
				},
			);
			if (!response.ok) {
				throw new Error("Failed to status changed as paid");
			}
			setStatusClick((click) => !click);
		} catch (error) {
			console.log((error as Error).message);
		} finally {
			navigate("/");
		}
	}

	console.log(invoices);
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
