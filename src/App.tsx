import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Invoices from "./pages/Invoices";
import InvoiceDetails from "./pages/InvoiceDetails";
import { createContext, useState } from "react";
import data from "../data.json";

interface IInvoices {
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
}>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  invoices: [],
  setInvoices: () => [],
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

  return (
    <InvoiceContext.Provider
      value={{ isDarkMode, setIsDarkMode, invoices, setInvoices }}
    >
      <RouterProvider router={router} />
    </InvoiceContext.Provider>
  );
}

export default App;
