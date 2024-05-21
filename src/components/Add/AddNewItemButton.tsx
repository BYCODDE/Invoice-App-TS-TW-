import React from "react";
interface Item {
	name: string;
	quantity: number;
	price: number;
	total: number;
}
interface AddNewItemButtonProps {
	append: (item: Item) => void;
}
const AddNewItemButton: React.FC<AddNewItemButtonProps> = ({ append }) => {
	return (
		<div
			className="cursor-pointer hover:bg-[#DFE3FA] md:w-[504px] w-[327px] md:p-[15px] h-[48px] bg-[#F9FAFE] dark:bg-[#1E2139] flex items-center justify-center rounded-full mt-[15px] mb-[50px]"
			onClick={() => append({ name: "", quantity: 0, price: 0, total: 0 })}
		>
			<button
				type="button"
				className="text-[#7E88C3] text-[15px] dark:text-white font-bold"
			>
				<span className="px-[9px] dark:text-white">+</span>Add New Item
			</button>
		</div>
	);
};

export default AddNewItemButton;
