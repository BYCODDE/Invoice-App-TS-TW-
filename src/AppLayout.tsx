import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { InvoiceContext } from "./App";
import { useContext } from "react";
import DeleteModal from "./components/DeleteModal";
import EditInvoice from "./components/Add/EditInvoice";

export default function AppLayout() {
	const { isDarkMode, isDeleteOpen, showAddInvoice, showEditInvoice } =
		useContext(InvoiceContext);

	return (
		<div
			className={`${
				isDarkMode ? "dark" : ""
			}   ${showAddInvoice && "xl:overflow-hidden xl:h-[100vh]"}  ${showEditInvoice && "xl:overflow-hidden xl:h-[100vh]"} ${isDeleteOpen && "xl:overflow-hidden xl:h-[100vh]"}  flex flex-col items-center xl:flex-row xl:items-start relative min-h-[100vh]`}
		>
			<Header />
			<main className={`xl:flex xl:justify-center w-full`}>
				<Outlet />
			</main>
			{isDeleteOpen && <DeleteModal />}
			{showEditInvoice && <EditInvoice />}
			{showAddInvoice && <EditInvoice />}
		</div>
	);
}
