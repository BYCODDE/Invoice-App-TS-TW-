import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Invoices from "./pages/Invoices";
import InvoiceDetails from "./pages/InvoiceDetails";
import { useState } from "react";
import data from "../data.json";

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
  const [invoices, setInvoices] = useState(data);

  return <RouterProvider router={router} />;
}

export default App;
