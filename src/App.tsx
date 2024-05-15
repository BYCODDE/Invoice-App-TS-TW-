import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Invoices from "./pages/Invoices";
import InvoiceDetails from "./pages/InvoiceDetails";

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
  return <RouterProvider router={router} />;
}

export default App;
