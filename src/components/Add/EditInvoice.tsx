import { useContext, useState } from "react";
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

// import AddInvoicesButtons from "./AddInvoicesButtons";

export default function EditInvoice() {
	const { invoices, setInvoices, setShowEditInvoice } =
		useContext(InvoiceContext);
	const { id } = useParams();

	const find = invoices.find((item) => item.id === id);
	console.log(find);
	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<IInvoices>({
		defaultValues: {
			items: find?.items || [],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "items",
	});

	const onSubmit: SubmitHandler<IInvoices> = (data) => {
		console.log(data);
		// const editedData = data;
		console.log("ki");
		data.id = find?.id;
		const index = invoices.findIndex((item) => item.id === "XM9141");
		invoices[index] = data;
		setInvoices([...invoices]);
	};

	const formattedDate = format(new Date(find?.createdAt || ""), "dd MMM yyyy");

	console.log(formattedDate);

	const validateGmail = (value: string) => {
		if (!value.endsWith("@mail.com")) {
			return "Email must contain `@mail.com`";
		}
		return true;
	};
	const [selectedDate, setSelectedDate] = useState<Date | null | string>(null);
	console.log("errors", errors);

	return (
		<div>
			<div
				onClick={() => setShowEditInvoice(false)}
				className=" sm:flex-none  md:w-full md:right-0 md:top-0 md:left-0 md:h-[100vh] bg-[#000]  md:fixed  opacity-[0.4984]"
			></div>

			<form
				className="flex xl:top-[0px] md:h-screen   md:overflow-y-auto md:overflow-x-hidden  xl:w-[719px] xl:pl-[70px] md:top-[80px]  md:rounded-r-3xl  md:left-0 flex-col md:w-[616px] md:pt-[750px] md:absolute  md:z-20 bg-[white] items-center justify-center box-border p-3 dark:bg-[#141625]
                
                "
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="h-[32px] md:w-[504px] w-full     text-[24px] font-bold my-[20px] dark:text-white ">{`Edit # ${find?.id}`}</div>
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
				{/* {errors.senderAddress?.street ? (
					<p className="text-[red]  md:pl-[50px]  font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
						Street Address is required
					</p>
				) : null} */}

				<div>
					{/* <div className="flex justify-between w-full ">
						{errors.senderAddress?.city ? (
							<p className="text-[red] ]  text-[10px] font-league-spartan leading-4 tracking-tight md:w-[152px]  w-full text-left py-1">
								{errors.senderAddress?.city?.message}
							</p>
						) : null}
						{errors.senderAddress?.postCode ? (
							<p className="text-[red]    font-league-spartan text-[10px] leading-4 tracking-tight md:w-[152px]  w-full text-left  py-1">
								{errors.senderAddress?.postCode?.message}
							</p>
						) : null}
					</div> */}
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

					{/* {errors.senderAddress?.country ? (
						<p className="text-[red]    font-league-spartan text-[10px] leading-4 tracking-tight w-full text-left  md:w-[152px]  py-2">
							Please fill Country graph
						</p>
					) : null} */}
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
				{/* {errors.clientName ? (
					<div className="flex justify-between md:w-[500px]  w-full">
						<p className="text-[red]  md:pr-[50px]  font-league-spartan text-[10px]  leading-4 tracking-tight   w-full text-left px-2 py-2">
							Client's Name
						</p>
						<p className="text-[red]    font-league-spartan px-2 text-[10px]  leading-4 tracking-tight w-full text-right  py-2">
							can't be empty
						</p>
					</div>
				) : null} */}

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
				{/* {errors.clientEmail ? (
					<p className="text-[red]   font-league-spartan text-[10px]  leading-4 tracking-tight w-full  md:w-[500px] text-left  py-2">
						{errors.clientEmail?.message}
					</p>
				) : null} */}
				<InputComponent
					optimalError={errors.clientAddress?.street}
					inputTitle="Street Address"
					id="ClientStreetAddress"
					defaultValue={find?.clientAddress?.street || ""}
					register={register("clientAddress.street", {
						required: "can't be empty",
					})}
				/>
				{/* {errors.clientAddress?.street ? (
					<p className="text-[red]  md:pl-[50px]  font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
						Street address is required
					</p>
				) : null} */}
				{/* <div className="flex justify-between w-full ">
					{errors.clientAddress?.city ? (
						<p className="text-[red]  md:pl-[50px]  font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
							{errors.clientAddress?.city.message}
						</p>
					) : null}
					{errors.clientAddress?.postCode ? (
						<p className="text-[red]  md:pl-[50px]  font-league-spartan text-[10px]  leading-4 tracking-tight w-full md:w-[504px] text-left  py-2">
							{errors.clientAddress.postCode?.message}
						</p>
					) : null}
				</div> */}
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
				<div className="flex flex-col gap-[50px] md:px-[35px] md:self-start md:gap-[0px] pb-[50px] box-border">
					{fields.map((item, index) => (
						<div
							className="md:flex gap-[20px] md:items-baseline xl:pl-[20px] "
							key={index}
						>
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
										defaultValue={item.quantity || ""}
										{...register(`items.${index}.quantity`, {
											required: "can't be empty",
										})}
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
										defaultValue={item.price || ""}
										{...register(`items.${index}.price`, {
											required: "can't be empty",
										})}
									/>
								</div>
								<div className="flex flex-col items-start justify-center gap-[10px] w-[80px] h-[48px] box-border">
									<label className="cursor-pointer md:hidden text-[#7E88C3] text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3">
										Total
									</label>
									<input
										className=" w-[60px] h-[48px] flex  items-center  flex-shrink-0 rounded-md  bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
										defaultValue={
											item.quantity > 0 ? item.price * item.quantity : 0
										}
										{...register(`items.${index}.total`, {
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
				{/* <AddInvoicesButtons /> */}
				<EditInvoicesButtons />
			</form>
		</div>
	);
}
