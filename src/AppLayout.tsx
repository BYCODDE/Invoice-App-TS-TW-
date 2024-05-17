import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { InvoiceContext } from "./App";
import { useContext } from "react";

export default function AppLayout() {
  const { isDarkMode } = useContext(InvoiceContext);
  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="flex flex-col items-center xl:flex-row xl:items-start bg-[#F8F8FB] dark:bg-[#141625]">
        <Header />
        <main className="xl:flex xl:justify-center xl:w-full w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
