import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { InvoiceContext } from "./App";
import { useContext } from "react";

export default function AppLayout() {
  const { isDarkMode } = useContext(InvoiceContext);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Header />
      <Outlet />
    </div>
  );
}
