import { useNavigate, useParams } from "react-router-dom";
import InvoiceDetailsButtons from "../components/InvoiceDetailsButtons";
import InvoiceStatusInfo from "../components/InvoiceStatusInfo";
import SingleInvoiceInformation from "../components/SingleInvoiceInformation";
import arrowLeft from "/assets/icon-arrow-left.svg";
import { useContext, useEffect, useState } from "react";
import { InvoiceContext } from "../App";
import { IInvoices } from "../types/types";

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

export default function InvoiceDetails() {
	const [choosenInvoice, setChoosenInvoice] = useState<IInvoices | null>(null);
	const { id } = useParams();
	const { showEditInvoice } = useContext(InvoiceContext);
	const isMobile = useIsMobile();

	const navigate = useNavigate();
	useEffect(() => {
		async function getData() {
			try {
				const response = await fetch(
					`https://invoice-project-team-5.onrender.com/api/invoice/${id}`,
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data from the server");
				}
				const data = await response.json();
				setChoosenInvoice(data);
				data;
			} catch (error) {
				(error as Error).message;
			}
		}
		getData();
	}, [id]);

	if (showEditInvoice && isMobile) {
		return null;
	}

	return (
		<div className="w-full md:h-[100vh] max-w-[500px] m-auto md:max-w-[688px] md:w-[688px] md:m-auto xl:w-[730px] xl:max-w-[730px] relative md:mt-[100px] xl:m-0">
			<div className=" pt-[33px] px-[24px]">
				<div
					onClick={() => navigate(-1)}
					className="flex items-center gap-[23px] xl:cursor-pointer"
				>
					<img src={arrowLeft} alt="left-arrow" className="xl:mb-[2px]" />
					<p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-[#FFFFFF] xl:hover:text-[#7E88C3]">
						Go back
					</p>
				</div>

				<InvoiceStatusInfo choosenInvoice={choosenInvoice} />
				<SingleInvoiceInformation choosenInvoice={choosenInvoice} />
			</div>
			<div className="md:hidden">
				<InvoiceDetailsButtons choosenInvoice={choosenInvoice} />
			</div>
		</div>
	);
}
