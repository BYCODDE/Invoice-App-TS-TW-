import { useContext, useState } from "react";
import Filter from "../components/Filter";
import IncomeInvoice from "../components/IncomeInvoice";
import { InvoiceContext } from "../App";
import { Link } from "react-router-dom";

const Invoices: React.FC = () => {
	const { invoices } = useContext(InvoiceContext);
	const [info, setInfo] = useState<string[]>([]);

	const filteredInvoices = invoices.filter((invoice) => {
		if (info.length === 0) return true;
		return info.includes(invoice.status ?? "");
	});

	return (
		<div className="w-[100%] dark:bg-[#141625] flex flex-col justify-center items-center p-[20px] mt-[32px] bg-white">
			<Filter invoices={invoices} setInfo={setInfo} />
			{filteredInvoices.map((item) => (
				<Link to={`${item.id}/invoiceDetails`}>
					<IncomeInvoice key={item.id} item={item} />
				</Link>
			))}
		</div>
	);
};

export default Invoices;
