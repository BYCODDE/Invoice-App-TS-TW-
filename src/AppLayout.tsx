import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { InvoiceContext } from "./App";
import { useContext } from "react";
import DeleteModal from "./components/DeleteModal";

export default function AppLayout() {
	const { isDarkMode, isDeleteOpen } = useContext(InvoiceContext);
	return (
		<div
			className={`${
				isDarkMode ? "dark" : ""
			} flex flex-col items-center xl:flex-row xl:items-start `}
		>
			<Header />
			<main className="  xl:flex xl:justify-center w-full ">
				<Outlet />
			</main>
			{isDeleteOpen && <DeleteModal />}
		</div>
	);
}
