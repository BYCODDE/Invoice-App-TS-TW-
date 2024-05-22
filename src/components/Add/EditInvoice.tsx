import { useContext, useEffect, useState } from "react";
import { useFieldArray, useForm, SubmitHandler } from "react-hook-form";
import { InvoiceContext } from "../../App";
import { format } from "date-fns";

import InputComponent from "./InputComponent";
import InputsComponent from "./InputsComponent";

import AddNewItemButton from "./AddNewItemButton";
import EditInvoicesButtons from "./EditInvoicesButtons";
import DateTerms from "./Date_Terms";
import { IInvoices } from "../../types/types";
import { useParams } from "react-router-dom";

import AddInvoicesButtons from "./AddInvoicesButtons";

export default function EditInvoice() {
	const [countTotal, setCountTotal] = useState(0);

	const {
		invoices,

		setShowEditInvoice,
		showAddInvoice,
		term,
		buttonType,
		setRender,
		setShowAddInvoice,
	} = useContext(InvoiceContext);
	const { id } = useParams();

	const find = invoices.find((item) => item.id === id);
	console.log(find);
	const {
		register,
		handleSubmit,
		setValue,

		control,
		reset,
		formState: { errors },
	} = useForm<IInvoices>({
		defaultValues: {
			...find,
			items: find?.items || [],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "items",
	});

	const generateString = () => {
		const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const randomChars = "0123456789";
		let randomId = "";

		for (let i = 0; i < 2; i++) {
			randomId += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		for (let i = 0; i < 4; i++) {
			randomId += randomChars.charAt(
				Math.floor(Math.random() * randomChars.length),
			);
		}

		return randomId;
	};

	const onSubmit: SubmitHandler<IInvoices> = async (data) => {
		data.id = generateString();

		console.log(data, "დატააა");

		const createdAt = find?.createdAt ? new Date(find.createdAt) : new Date();
		if (isNaN(createdAt.getTime())) {
			console.error("Invalid date value for createdAt");
			return;
		}

		data.createdAt = format(createdAt, "yyyy-MM-dd");
		data.paymentDue = format(createdAt, "yyyy-MM-dd");

		const paymentDueDate = format(
			new Date(new Date(data.createdAt).getTime() + term).toISOString(),
			"yyyy-MM-dd",
		);

		const paymentTerms = find?.paymentTerms ?? 0;

		data.paymentDue = paymentDueDate;

		console.log(data.createdAt);
		console.log(paymentTerms);

		data.paymentTerms = term;

		if (buttonType === "draft") {
			data.status = {
				id: Math.random() * Math.random(),
				name: "Draft",
			};
			try {
				const response = await fetch(
					"https://invoice-project-team-5.onrender.com/api/invoice/draft/",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data),
					},
				);
				const responseData = await response.json();
				console.log(responseData, "რესფონს დატა ");
			} catch (error) {
				console.log(error);
			} finally {
				setRender((render) => !render);
				setShowAddInvoice(false);
			}
		} else if (buttonType === "pending") {
			data.status = {
				id: Math.random() * Math.random(),
				name: "Pending",
			};
			try {
				const response = await fetch(
					"https://invoice-project-team-5.onrender.com/api/invoice/",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data),
					},
				);
				const responseData = await response.json();
				console.log(responseData, "რესფონს დატა ");
			} catch (error) {
				console.log(error);
			} finally {
				setRender((render) => !render);
				setShowAddInvoice(false);
			}
		}
	};

	const formattedDate = find
		? format(new Date(find?.createdAt || ""), "yyyy MM dd ")
		: "";

	console.log(formattedDate);

	const validateGmail = (value: string) => {
		if (!value.endsWith("@mail.com")) {
			return "Email must contain `@mail.com`";
		}
		return true;
	};
	const [selectedDate, setSelectedDate] = useState<Date | null | string>(null);
	console.log("errors", errors);

	useEffect(() => {
		if (showAddInvoice) {
			console.log("Shemovida");

			handleAddNewItem();
		}
	}, [showAddInvoice]);
	const handleAddNewItem = () => {
		reset({
			createdAt: "", // Add default date here if needed
			paymentDue: "", // Add default paymentDue here if needed
			description: "", // Add default description here if needed
			paymentTerms: 0, // Add default paymentTerms here if needed
			clientName: "",
			clientEmail: "",
			status: "", // Add default status here if needed
			senderAddress: {
				street: "",
				city: "",
				postCode: "",
				country: "",
			},
			clientAddress: {
				street: "",
				city: "",
				postCode: "",
				country: "",
			},
			items: [
				{
					name: "",
					quantity: 0,
					price: 0,
					total: countTotal,
				},
			],
			total: countTotal,
		});
	};

	useEffect(() => {
		const foundItem = fields.find(
			(item) => item.quantity > 0 && item.price > 0,
		);
		if (foundItem) {
			setCountTotal(foundItem.quantity * foundItem.price);
		}
	}, [fields]);

	const handleQuantityChange = (index: number, quantity: number) => {
		const newItems = [...fields];
		newItems[index].quantity = quantity;
		newItems[index].total = quantity * newItems[index].price;
		setValue(
			`items[${index}].quantity` as `items.${number}.quantity`,
			quantity,
		);
		setValue(
			`items[${index}].total` as `items.${number}.total`,
			newItems[index].total,
		);
	};

	const handlePriceChange = (index: number, price: number) => {
		const newItems = [...fields];
		newItems[index].price = price;
		newItems[index].total = price * newItems[index].quantity;
		setValue(`items[${index}].price` as `items.${number}.price`, price);
		setValue(
			`items[${index}].total` as `items.${number}.total`,
			newItems[index].total,
		);
	};

	console.log(showAddInvoice);
	return (
		<div>
			<div className="flex mt-[25px] items-center gap-[23px] xl:cursor-pointer  md:hidden">
				<img src="/assets/icon-arrow-left.svg" alt="go back" />
				<span className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-[#FFFFFF] xl:hover:text-[#7E88C3]">
					Go back
				</span>
			</div>
			<div
				onClick={() => {
					setShowEditInvoice(false);
					setShowAddInvoice(false);
				}}
				className=" sm:flex-none  md:w-full md:right-0 md:top-0 md:left-0 md:h-[100vh] bg-[#000]  md:fixed  opacity-[0.4984]"
			></div>

			<form
				className="h-modal xl:h-screen xl:left-[80px] px-[24px] md:px-[56px]  md:overflow-y-scroll md:overflow-x-hidden     xl:top-[0px]  md:top-[80px]  md:rounded-r-3xl  md:left-0 flex-col  md:absolute  md:z-20 bg-[white]   box-border  dark:bg-[#141625]"
				onSubmit={handleSubmit(onSubmit)}
			>
				{!showAddInvoice ? (
					<div className="h-[32px] md:w-[504px] w-full     text-[24px] font-bold my-[20px] dark:text-white ">{`Edit # ${find?.id || ""}`}</div>
				) : (
					<div className="h-[32px] md:w-[504px] w-full text-[24px] font-bold my-[20px] dark:text-white ">
						New Invoice
					</div>
				)}
				<h3 className="text-[#7C5DFA] py-[20px] md:pl-[0]  pl-[15px] font-league-spartan text-[15px] font-bold leading-4 tracking-tight w-full md:w-[504px] text-left  ">
					Bill From
				</h3>

				<InputComponent
					optimalError={errors.senderAddress?.street}
					inputTitle="Street Address"
					id="senderAddress.street"
					defaultValue={find?.senderAddress?.street || ""}
					register={register("senderAddress.street", {
						required: "can't be empty",
					})}
				/>

				<div>
					<InputsComponent
						cityError={errors.senderAddress?.city}
						postCodeError={errors.senderAddress?.postCode}
						CountryError={errors.senderAddress?.country}
						inputTitle1="city"
						inputTitle2="Post Code"
						id1="senderAddress.city"
						defaultValue1={find?.senderAddress?.postCode || ""}
						register1={register("senderAddress.city", {
							required: "can't be empty",
						})}
						register2={register("senderAddress.postCode", {
							required: "can't be empty",
							minLength: {
								value: 5,
								message: "Length must be 5",
							},
						})}
						defaultValue2={find?.senderAddress?.postCode || ""}
						id2="SenderZipCode"
						inputTitle="Country"
						id3="SenderCountry"
						defaultValue3={find?.senderAddress?.country || ""}
						register3={register("senderAddress.country", {
							required: "can't be empty",
						})}
					/>
				</div>
				<h3 className="text-[#7C5DFA]   font-league-spartan text-[15px] font-bold leading-4 md:pl-[0]  pl-[15px] tracking-tight w-full md:w-[504px] text-left py-[20px] ">
					Bill To
				</h3>

				<InputComponent
					optimalError={errors.clientName}
					inputTitle="Client’s Name"
					id="ClientName"
					defaultValue={find?.clientName || ""}
					register={register("clientName", { required: "can't be empty" })}
				/>

				<InputComponent
					optimalError={errors.clientEmail}
					inputTitle="Client’s Email"
					id="ClientEmail"
					defaultValue={find?.clientEmail || ""}
					register={register("clientEmail", {
						required: "can't be empty",
						validate: validateGmail,
					})}
				/>

				<InputComponent
					optimalError={errors.clientAddress?.street}
					inputTitle="Street Address"
					id="ClientStreetAddress"
					defaultValue={find?.clientAddress?.street || ""}
					register={register("clientAddress.street", {
						required: "can't be empty",
					})}
				/>

				<InputsComponent
					cityError={errors.clientAddress?.city}
					postCodeError={errors.clientAddress?.postCode}
					CountryError={errors.clientAddress?.country}
					inputTitle1="city"
					inputTitle2="Post Code"
					id1="clientAddressCity"
					defaultValue1={find?.clientAddress?.city || ""}
					register1={register("clientAddress.city", {
						required: "can't be empty",
					})}
					register2={register("clientAddress.postCode", {
						required: "can't be empty",
						minLength: {
							value: 5,
							message: "Length must be 5",
						},
					})}
					defaultValue2={find?.clientAddress?.postCode || ""}
					id2="clientZipCode"
					inputTitle="Country"
					id3="ClientCountry"
					defaultValue3={find?.clientAddress?.country || ""}
					register3={register("clientAddress.country", {
						required: "can't be empty",
					})}
				/>

				<InputComponent
					optimalError={errors.description}
					inputTitle="Project Description"
					id="ProjectDescription"
					defaultValue={find?.description || ""}
					register={register("description")}
				/>

				<DateTerms
					inputTitle1="Payment Terms"
					id1="PaymentTerms"
					defaultValue1={`Net ${find?.paymentTerms} Days` || ""}
					register1={register("paymentTerms", { required: "can't be empty" })}
					inputTitle2="Invoice Date"
					id2="InvoiceDate"
					register2={register("createdAt", { required: "must be chosen" })}
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
					setValue={setValue}
					control={control}
					defaultValue2={formattedDate}
				/>

				<h3 className="text-[#777F98] md:pl-[0]  pl-[15px] md:pt-[15px] pt-[62px] pb-[20px] font-league-spartan text-[18px] tracking-wide font-bold leading-32px  w-full md:w-[504px] text-left py-2 ">
					Item List
				</h3>
				<div className="md:flex w-[505px] gap-[20px] mb-[-15px] hidden text-[#7E88C3] font-league-spartan text-[13px] font-medium leading-4 tracking-tight">
					{" "}
					<div className="w-[214px] ">
						{" "}
						<span>Item Name</span>
					</div>
					<div className="w-[62px]">
						{" "}
						<span>Quantity</span>
					</div>
					<div className="w-[100px]">
						{" "}
						<span>price</span>
					</div>
					<div className="w-[60px]">
						{" "}
						<span>Total</span>
					</div>
				</div>
				<div className="flex flex-col gap-[50px]  md:self-start md:gap-[0px] pb-[50px] box-border">
					{fields.map((item, index) => (
						<div className="md:flex gap-[20px] md:items-baseline " key={index}>
							<div className="flex flex-col  items-start justify-center gap-[20px] w-[327px] md:w-[214px]  box-border py-[10px] ">
								<label
									className="text-[#7E88C3] md:hidden  
                                    cursor-pointer font-league-spartan text-[13px] font-medium leading-4 tracking-tight pl-[5px]"
									htmlFor={`items.${index}.name`}
								>
									Item Name
								</label>
								<input
									className={`w-[327px] md:w-[214px] h-[48px] rounded-md border-[1px] border-solid border-[#DFE3FA] bg-white   font-league-spartan text-[13px] font-bold leading-4 tracking-tight px-[20px] dark:bg-[#1E2139] dark:text-white dark:border-none`}
									id={item.name}
									defaultValue={item.name || ""}
									{...register(`items.${index}.name`, {
										required: "can't be empty",
									})}
								/>
							</div>
							<div className="flex  items-start  gap-[20px]  w-[64px] h-[48px] pt-[30px] pb-[50px] ">
								<div className="flex flex-col items-start justify-center gap-[10px] w-[100px] h-[48px] box-border ">
									{" "}
									<label
										className="text-[#7E88C3] md:hidden cursor-pointer font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
										htmlFor={`items.${index}.quantity`}
									>
										Quantity
									</label>
									<input
										className="  w-[64px] h-[48px] flex-shrink-0 rounded-md border-[1px] border-solid border-[#DFE3FA] bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
										id={`items.${index}.quantity`}
										type="number"
										defaultValue={item.quantity || 0}
										{...register(`items.${index}.quantity`, {
											valueAsNumber: true,
											required: "can't be empty",
										})}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
											handleQuantityChange(index, +e.target.value)
										}
									/>
								</div>
								<div className="flex flex-col items-start justify-center gap-[10px] w-[100px] h-[48px] box-border">
									<label
										className="cursor-pointer md:hidden text-[#7E88C3] text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
										htmlFor={`items.${index}.price`}
									>
										Price
									</label>
									<input
										className=" w-[100px] h-[48px] flex-shrink-0 rounded-md border-[1px] border-solid border-[#DFE3FA] bg-white text-custom-color font-league-spartan text-[13px] 
                                        cursor-pointer font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
										id="SenderZipCode"
										type="number"
										defaultValue={item.price || 0}
										{...register(`items.${index}.price`, {
											valueAsNumber: true,
											required: "can't be empty",
										})}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
											handlePriceChange(index, +e.target.value)
										}
									/>
								</div>
								<div className="flex flex-col items-start justify-center gap-[10px] w-[80px] h-[48px] box-border">
									<label className="cursor-pointer md:hidden text-[#7E88C3] text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3">
										Total
									</label>
									<input
										className=" w-[60px] h-[48px] flex  items-center  flex-shrink-0 rounded-md  bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
										value={
											item.quantity > 0 && item.price > 0
												? item.quantity * item.price
												: 0
										}
										type="number"
										{...register(`items.${index}.total`, {
											valueAsNumber: true,
											required: "can't be empty",
										})}
									></input>
								</div>
								<div className="w-[30px] h-[48px] flex items-center  ">
									<div className=" flex w-[12px] h-[16px] items-center md:pt-[0px] pt-[14px]">
										<img
											onClick={() => remove(index)}
											className=" w-[12px] h-[16px] flex cursor-pointer"
											src="/assets/icon-delete.svg"
											alt="bin"
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<AddNewItemButton append={append} />
				<div className="w-full mb-[20px]">
					{Object.keys(errors).length !== 0 && (
						<p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full md:w-[504px] xl:ml-[70px] text-left  py-2">
							{" "}
							- All fields must be added
						</p>
					)}
				</div>
				{showAddInvoice && <AddInvoicesButtons />}
				{!showAddInvoice && <EditInvoicesButtons />}
			</form>
		</div>
	);
}
