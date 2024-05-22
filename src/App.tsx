import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Invoices from "./pages/Invoices";
import InvoiceDetails from "./pages/InvoiceDetails";
import { createContext, useEffect, useState } from "react";

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
	render: boolean;
	setRender: React.Dispatch<React.SetStateAction<boolean>>;
	term: number;
	setTerm: React.Dispatch<React.SetStateAction<number>>;
	buttonType: string;
	setButtonType: React.Dispatch<React.SetStateAction<string>>;
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
	render: false,
	setRender: () => {},
	term: 0,
	setTerm: () => {},
	buttonType: "",
	setButtonType: () => {},
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
	const [invoices, setInvoices] = useState<IInvoices[]>([]);
	const [showAddInvoice, setShowAddInvoice] = useState(false);
	const [showEditInvoice, setShowEditInvoice] = useState(false);
	const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
	const [render, setRender] = useState<boolean>(false);
	const [buttonType, setButtonType] = useState<string>("");
	const [term, setTerm] = useState(0);

	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

	const [showInvoiceDetails, setShowInvoiceDetails] =
		useState<boolean>(isSmallDevice);

	// useEffect(() => {
	// 	if (showAddInvoice) {
	// 		setShowEditInvoice(true);
	// 	}
	// }, [showAddInvoice]);

	useEffect(() => {
		async function getData() {
			try {
				const response = await fetch(
					"https://invoice-project-team-5.onrender.com/api/invoice/",
				);

				if (!response.ok) {
					throw new Error("Failed to fetch data from the server");
				}
				const data = await response.json();
				setInvoices(data);
				console.log(data);
			} catch (error) {
				// console.log(error.message);
			}
		}
		getData();
	}, [render]);
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
				render,
				setRender,
				term,
				setTerm,
				buttonType,
				setButtonType,
			}}
		>
			<RouterProvider router={router} />
		</InvoiceContext.Provider>
	);
}

export default App;
