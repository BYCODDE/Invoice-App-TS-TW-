import { useContext, useState, useEffect } from "react";
import Filter from "../components/Filter";
import IncomeInvoice from "../components/IncomeInvoice";
import { InvoiceContext } from "../App";
import { Link } from "react-router-dom";
import NoIncomeInvoice from "../components/NoIncomeInvoice";

const Invoices: React.FC = () => {
	const { invoices, showAddInvoice } = useContext(InvoiceContext);
	const [info, setInfo] = useState<string[]>([]);

	const filteredInvoices = invoices.filter((invoice) => {
		if (info.length === 0) return true;
		return info.includes(invoice.status?.name.toLowerCase() ?? "");
	});
	const useIsMobile = () => {
		const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

		useEffect(() => {
			const handleResize = () => {
				setIsMobile(window.innerWidth < 768);
			};

			window.addEventListener("resize", handleResize);
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}, []);

		return isMobile;
	};
	const ismobile = useIsMobile();
	return (
		<>
			{ismobile && !showAddInvoice ? (
				<div className="w-[100%] dark:bg-[#141625] flex flex-col min-h-[95.5vh] items-center p-[20px] mt-[32px] bg-white">
					<Filter invoices={invoices} setInfo={setInfo} />
					{invoices.length > 0 ? (
						<div className="w-[100%] xl:pb-[20px] max-w-[375px] md:max-w-[672px]">
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
			) : !ismobile ? (
				<div className="w-[100%] dark:bg-[#141625] flex flex-col min-h-[95.5vh] items-center p-[20px] mt-[32px] bg-white">
					<Filter invoices={invoices} setInfo={setInfo} />
					{invoices.length > 0 ? (
						<div className="w-[100%] xl:pb-[20px] max-w-[375px] md:max-w-[672px]">
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
			) : null}
		</>
	);
};

export default Invoices;
