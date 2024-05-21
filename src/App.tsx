import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Invoices from "./pages/Invoices";
import InvoiceDetails from "./pages/InvoiceDetails";
import { createContext, useState } from "react";
import data from "../data.json";

export interface IInvoices {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total: number;
}
[];

export const InvoiceContext = createContext<{
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  invoices: IInvoices[];
  setInvoices: React.Dispatch<React.SetStateAction<IInvoices[]>>;
  isDeleteOpen: boolean;
  setIsDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  invoices: [],
  setInvoices: () => {},
  isDeleteOpen: false,
  setIsDeleteOpen: () => {},
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
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  return (
    <InvoiceContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        invoices,
        setInvoices,
        isDeleteOpen,
        setIsDeleteOpen,
      }}
    >
      <RouterProvider router={router} />
    </InvoiceContext.Provider>
  );
}

export default App;
