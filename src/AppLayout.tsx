import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { InvoiceContext } from "./App";
import { useContext } from "react";
import DeleteModal from "./components/DeleteModal";

export default function AppLayout() {
  const { isDarkMode, isDeleteOpen } = useContext(InvoiceContext);
  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="flex flex-col items-center xl:flex-row xl:items-start bg-[#F8F8FB] dark:bg-[#141625] relative">
        <Header />
        <main className="xl:flex xl:justify-center xl:w-full w-full">
          <Outlet />
        </main>

        {isDeleteOpen && <DeleteModal />}
      </div>
    </div>
  );
}
