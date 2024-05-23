import { useContext } from "react";
import { InvoiceContext } from "../App";

function Loading() {
	const { isLoading } = useContext(InvoiceContext);

	return (
		<div className={`mx-auto ${isLoading ? "mt-12" : ""} `}>
			{isLoading && (
				<div className="flex items-center justify-center h-screen overflow-hidden ">
					<div className=" w-[150px] h-[150px] bg-[#7C5DFA]  flex items-center justify-center   border-t-4 border-b-4 border-brand-600 rounded-full animate-spin">
						<img className="w-[50px] h-[50px]" src="/assets/logo.svg" alt="" />
					</div>
				</div>
			)}
		</div>
	);
}

export default Loading;
