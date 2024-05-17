import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IInvoices, InvoiceContext } from "../../App";
import { format } from "date-fns";
import InputComponent from "./InputComponent";
import InputsComponent from "./InputsComponent";

import AddNewItemButton from "./AddNewItemButton";
import EditInvoicesButtons from "./EditInvoicesButtons";
// import AddInvoicesButtons from "./AddInvoicesButtons";

export default function EditInvoice() {
  const { invoices, setInvoices, setShowEditInvoice } =
    useContext(InvoiceContext);
  const find = invoices.find((item) => item.id === "XM9141");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IInvoices>();
  const onSubmit: SubmitHandler<IInvoices> = (data) => {
    // const editedData = data;
    data.id = find?.id;
    const index = invoices.findIndex((item) => item.id === "XM9141");
    invoices[index] = data;
    setInvoices([...invoices]);
    console.log(data);
  };
  //   console.log(invoices);
  console.log(errors);
  const formattedDate = format(new Date(`${find?.createdAt}`), "dd MMM yyyy");
  console.log(formattedDate);

  return (
    <div>
      <div
        onClick={() => setShowEditInvoice(false)}
        className=" sm:flex-none  md:w-full md:right-0 md:top-0 md:left-0 md:h-[100vh] bg-[#000]  md:fixed  opacity-[0.4984]"
      ></div>
      <div className="h-[32px] w-full text-[24px] font-bold my-[20px] ">{`Edit # ${find?.id}`}</div>
      <form
        className="flex md:top-[80px] md:rounded-r-3xl  md:left-0 flex-col md:w-[616px] md:absolute  md:z-20 bg-[white] items-center justify-center box-border p-3 dark:bg-[#141625]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-section-title-color py-[20px] font-league-spartan text-[15px] font-bold leading-4 tracking-tight w-full md:w-[504px] text-left  py-2">
          Bill From
        </h3>

        <InputComponent
          inputTitle="Street Address"
          id="SenderStreetAddress"
          defaultValue={find?.senderAddress?.street || ""}
          register={register("senderAddress.street", { required: true })}
        />
        {errors.senderAddress?.street ? (
          <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
            Street Address is required
          </p>
        ) : null}
        <InputsComponent
          inputTitle1="city"
          inputTitle2="Post Code"
          id1="SenderCity"
          defaultValue1={find?.senderAddress?.postCode || ""}
          register1={register("senderAddress.city", {
            required: "Please Fill City graph",
          })}
          register2={register("senderAddress.postCode", {
            required: " Please Fill Zip Code",
            minLength: {
              value: 5,
              message: "Length must be 5",
            },
          })}
          defaultValue2={find?.senderAddress?.postCode || ""}
          id2="SenderZipCode"
        />
        <div className="flex justify-between w-full ">
          {errors.senderAddress?.city ? (
            <p className="text-[red] text-[10px] font-league-spartan leading-4 tracking-tight w-full text-left py-2">
              {errors.senderAddress?.city?.message}
            </p>
          ) : null}
          {errors.senderAddress?.postCode ? (
            <p className="text-[red] font-league-spartan text-[10px] leading-4 tracking-tight w-full text-left  py-2">
              {errors.senderAddress?.postCode?.message}
            </p>
          ) : null}
        </div>
        <InputComponent
          inputTitle="Country"
          id="SenderCountry"
          defaultValue={find?.senderAddress?.country || ""}
          register={register("senderAddress.country", { required: true })}
        />
        {errors.senderAddress?.country ? (
          <p className="text-[red] font-league-spartan text-[10px] leading-4 tracking-tight w-full text-left  py-2">
            Please fill Country graph
          </p>
        ) : null}
        <h3 className="text-section-title-color font-league-spartan text-[15px] font-bold leading-4  tracking-tight w-full md:w-[504px] text-left py-[20px] ">
          Bill To
        </h3>

        <InputComponent
          inputTitle="Client’s Name"
          id="ClientName"
          defaultValue={find?.clientName || ""}
          register={register("clientName", { required: true })}
        />
        {errors.clientName ? (
          <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
            Name is required
          </p>
        ) : null}

        <InputComponent
          inputTitle="Client’s Email"
          id="ClientEmail"
          defaultValue={find?.clientEmail || ""}
          register={register("clientEmail", { required: true })}
        />
        {errors.clientEmail ? (
          <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
            Email is required
          </p>
        ) : null}
        <InputComponent
          inputTitle="Street Address"
          id="ClientStreetAddress"
          defaultValue={find?.clientAddress?.street || ""}
          register={register("clientAddress.street", { required: true })}
        />
        {errors.clientAddress?.street ? (
          <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
            Street address is required
          </p>
        ) : null}
        <InputsComponent
          inputTitle1="city"
          inputTitle2="Post Code"
          id1="clientAddressCity"
          defaultValue1={find?.clientAddress?.city || ""}
          register1={register("clientAddress.city", {
            required: "Please Fill City graph",
          })}
          register2={register("clientAddress.postCode", {
            required: " Please Fill Zip Code",
            minLength: {
              value: 5,
              message: "Length must be 5",
            },
          })}
          defaultValue2={find?.clientAddress?.postCode || ""}
          id2="clientZipCode"
        />
        <div className="flex justify-between w-full ">
          {errors.clientAddress?.city ? (
            <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
              {errors.clientAddress?.city.message}
            </p>
          ) : null}
          {errors.clientAddress?.postCode ? (
            <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full md:w-[504px] text-left  py-2">
              {errors.clientAddress.postCode?.message}
            </p>
          ) : null}
        </div>
        <InputComponent
          inputTitle="Country"
          id="ClientCountry"
          defaultValue={find?.clientAddress?.country || ""}
          register={register("clientAddress.country", { required: true })}
        />

        <InputComponent
          inputTitle="Invoice Date"
          id="InvoiceDate"
          type="date"
          color="0.5"
          defaultValue={formattedDate || ""}
          register={register("createdAt", { required: true })}
        />

        <InputComponent
          inputTitle="Payment Terms"
          id="PaymentTerms"
          defaultValue={`Net ${find?.paymentTerms} Days` || ""}
          register={register("paymentTerms", { required: true })}
        />
        {errors.paymentTerms ? (
          <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full md:w-[504px] text-left  py-2">
            Payment Terms is required
          </p>
        ) : null}
        <InputComponent
          inputTitle="Project Description"
          id="ProjectDescription"
          defaultValue={find?.description || ""}
          register={register("description")}
        />

        <h3 className="text-[#777F98] pt-[62px] pb-[20px] font-league-spartan text-[18px] tracking-wide font-bold leading-32px  w-full md:w-[504px] text-left py-2 ">
          item List
        </h3>

        <div className="flex flex-col gap-[50px] pb-[50px] box-border">
          {find?.items.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-start justify-center gap-[20px] w-[327px] md:w-[504px]  box-border py-[10px] ">
                <label
                  className="text-label-text-color  font-league-spartan text-[13px] font-medium leading-4 tracking-tight pl-[5px]"
                  htmlFor={`items.${index}.name`}
                >
                  Item Name
                </label>
                <input
                  className={`w-[327px] h-[48px] rounded-md border border-gray-300 bg-white md:w-[504px]  font-league-spartan text-[13px] font-bold leading-4 tracking-tight px-[20px] dark:bg-[#1E2139] dark:text-white dark:border-none`}
                  id={item.name}
                  defaultValue={item.name || ""}
                  {...register(`items.${index}.name`, { required: true })}
                />
              </div>
              <div className="flex  items-start  gap-[20px]  w-[64px] h-[48px] pt-[30px] pb-[50px] ">
                <div className="flex flex-col items-start justify-center gap-[10px] w-[100px] h-[48px] box-border ">
                  {" "}
                  <label
                    className="text-label-text-color cursor-pointer font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
                    htmlFor={`items.${index}.quantity`}
                  >
                    Quantity
                  </label>
                  <input
                    className="  w-[64px] h-[48px] flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
                    id={`items.${index}.quantity`}
                    defaultValue={item.quantity || ""}
                    {...register(`items.${index}.quantity`, { required: true })}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-[10px] w-[100px] h-[48px] box-border">
                  <label
                    className="cursor-pointer text-label-text-color text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3"
                    htmlFor={`items.${index}.price`}
                  >
                    Price
                  </label>
                  <input
                    className=" w-[100px] h-[48px] flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
                    id="SenderZipCode"
                    defaultValue={item.price || ""}
                    {...register(`items.${index}.price`, { required: true })}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-[10px] w-[80px] h-[48px] box-border">
                  <label className="cursor-pointer text-label-text-color text-custom-color font-league-spartan text-[13px] font-medium leading-4 tracking-tight px-3">
                    Total
                  </label>
                  <input
                    className=" w-[60px] h-[48px] flex  items-center  flex-shrink-0 rounded-md  bg-white text-custom-color font-league-spartan text-[13px] font-bold leading-4 tracking-tight pl-3 dark:bg-[#1E2139]  dark:text-white dark:border-none"
                    defaultValue={item.total || ""}
                    {...register(`items.${index}.total`, { required: true })}
                  ></input>
                </div>
                <div className="w-[30px] h-[48px] flex items-center  ">
                  <div
                    className=" flex w-[12px] h-[16px] items-center pt-[14px]"
                    onClick={() => {
                      setValue(`items.${index}.quantity`, 0);
                      setValue(`items.${index}.total`, 0);
                    }}
                  >
                    <img
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

        <AddNewItemButton />

        <div className="w-full h-[40px]  bg-gradient-to-bottom "></div>
        {/* <AddInvoicesButtons /> */}
        <EditInvoicesButtons />
      </form>
    </div>
  );
}
