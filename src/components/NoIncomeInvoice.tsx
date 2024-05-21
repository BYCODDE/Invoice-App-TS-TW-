import emptySvg from "/public/assets/illustration-empty.svg";

export default function NoIncomeInvoice() {
	return (
		<div className="mt-[162px]">
			<img src={emptySvg} alt="emptySvg" />
			<div className=" mt-[66px]  flex items-center flex-col  justify-center">
				<h2 className="dark:text-[#FFF] mb-[23px] text-[#0C0E16] text-[24px] font-bold">
					There is nothing here
				</h2>
				<p className="dark:text-[#DFE3FA]      text-[#888EB0] text-[13px] font-medium	">
					Create an invoice by clicking the <br />{" "}
					<span className="font-bold">New Invoice</span> button and get started
				</p>
			</div>
		</div>
	);
}
