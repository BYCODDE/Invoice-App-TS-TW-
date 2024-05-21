import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Invoices from "./pages/Invoices";
import InvoiceDetails from "./pages/InvoiceDetails";
import { createContext, useEffect, useState } from "react";
import data from "../data.json";
import { IInvoices } from "./types/types";
import { useMediaQuery } from "@uidotdev/usehooks";

export const InvoiceContext = createContext<{
	isDarkMode: boolean;
	setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
	invoices: IInvoices[];
	setInvoices: React.Dispatch<React.SetStateAction<IInvoices[]>>;
	setShowAddInvoice: React.Dispatch<React.SetStateAction<boolean>>;
	showAddInvoice: boolean;
	showEditInvoice: boolean;
	setShowEditInvoice: React.Dispatch<React.SetStateAction<boolean>>;
	isDeleteOpen: boolean;
	setIsDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isSmallDevice: boolean;
	showInvoiceDetails: boolean;
	setShowInvoiceDetails: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	isDarkMode: false,
	setIsDarkMode: () => {},
	invoices: [],
	setInvoices: () => {},
	setShowAddInvoice: () => {},
	showAddInvoice: false,
	showEditInvoice: false,
	setShowEditInvoice: () => {},
	isDeleteOpen: false,
	setIsDeleteOpen: () => {},
	isSmallDevice: false,
	showInvoiceDetails: false,
	setShowInvoiceDetails: () => {},
});

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				element: <Invoices />,
				path: "/",
			},
			{
				element: <InvoiceDetails />,
				path: "/:id/invoiceDetails",
			},
		],
	},
]);

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [invoices, setInvoices] = useState<IInvoices[]>(data);
	const [showAddInvoice, setShowAddInvoice] = useState(false);
	const [showEditInvoice, setShowEditInvoice] = useState(false);
	const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

	const [showInvoiceDetails, setShowInvoiceDetails] =
		useState<boolean>(isSmallDevice);

	// useEffect(() => {
	// 	if (showAddInvoice) {
	// 		setShowEditInvoice(true);
	// 	}
	// }, [showAddInvoice]);
	console.log(showAddInvoice);
	return (
		<InvoiceContext.Provider
			value={{
				isDarkMode,
				setIsDarkMode,
				invoices,
				setInvoices,
				setShowAddInvoice,
				showAddInvoice,
				setShowEditInvoice,
				showEditInvoice,
				isDeleteOpen,
				setIsDeleteOpen,
				isSmallDevice,
				showInvoiceDetails,
				setShowInvoiceDetails,
			}}
		>
			<RouterProvider router={router} />
		</InvoiceContext.Provider>
	);
}

export default App;
