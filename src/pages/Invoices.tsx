import { useContext, useState } from "react";
import Filter from "../components/Filter";
import IncomeInvoice from "../components/IncomeInvoice";
import { InvoiceContext } from "../App";
import { Link } from "react-router-dom";
import NoIncomeInvoice from "../components/NoIncomeInvoice";

const Invoices: React.FC = () => {
	const { invoices } = useContext(InvoiceContext);
	const [info, setInfo] = useState<string[]>([]);

	const filteredInvoices = invoices.filter((invoice) => {
		if (info.length === 0) return true;
		return info.includes(invoice.status?.name ?? "");
	});

	return (
		<div className="w-[100%] dark:bg-[#141625] flex flex-col justify-center items-center p-[20px] mt-[32px] bg-white">
			<Filter invoices={invoices} setInfo={setInfo} />
			{invoices.length > 0 ? (
				<div className="w-[100%] max-w-[375px] md:max-w-[672px]">
					{filteredInvoices.map((item) => (
						<Link key={item.id} to={`${item.id}/invoiceDetails`}>
							<IncomeInvoice item={item} />
						</Link>
					))}
				</div>
			) : (
				<NoIncomeInvoice />
			)}
		</div>
	);
};

export default Invoices;
