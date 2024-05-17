import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IInvoices, InvoiceContext } from "../../App";
import { format } from "date-fns";
import InputComponent from "./InputComponent";
import InputsComponent from "./InputsComponent";
import ItemContainer from "./ItemContainer";
import AddNewItemButton from "./AddNewItemButton";
import EditInvoicesButtons from "./EditInvoicesButtons";
import AddInvoicesButtons from "./AddInvoicesButtons";

type Inputs = {
  id: number;
  createdAt: string;
  paymentDue: StreamPipeOptions;
  description: string;
  status: string;
  clientAddress: string;
  items: string;
  total: number;
  SenderStreetAddress: string;
  SenderCity: string;
  SenderZipCode: string;
  senderAddress: string;
  SenderCountry: string;
  clientName: string;
  clientEmail: string;
  ClientStreetAddress: string;
  clientAddressCity: string;
  clientZipCode: string;
  ClientCountryAddress: string;
  InvoiceDate: string;
  paymentTerms: number;
  ProjectDescription: string;
  itemName: string;
  itemQuantity: number | string | undefined;
  itemPrice: number;
  quantity: number;
  price: number;
  itemName2: number;
  quantity2: number;
  price2: number;
};
export default function EditInvoice() {
  const { invoices, setInvoices } = useContext(InvoiceContext);
  const find = invoices.find((item) => item.id === "XM9141");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const editedData = data;
    setInvoices<IInvoices[]>([...invoices, editedData]);
    console.log(invoices);
  };

  const formattedDate = format(new Date(`${find?.createdAt}`), "dd MMM yyyy");
  console.log(formattedDate);
  const handleBinClick = () => {
    reset({ quantity: 0 });
  };
  const handleSecondItemBinClick = () => {
    reset({ quantity2: 0 });
  };

  return (
    <div>
      <form
        className="flex flex-col items-center justify-center box-border p-3 dark:bg-[#141625]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-section-title-color font-league-spartan text-[15px] font-bold leading-4 tracking-tight w-full text-left  py-2">
          Bill From
        </h3>

        <InputComponent
          inputTitle="Street Address"
          id="SenderStreetAddress"
          defaultValue={find?.senderAddress?.street || ""}
          register={register("SenderStreetAddress", { required: true })}
        />
        {errors.SenderStreetAddress ? (
          <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
            Street Address is required
          </p>
        ) : null}
        <InputsComponent
          inputTitle1="city"
          inputTitle2="Post Code"
          id1="SenderCity"
          defaultValue1={find?.senderAddress.postCode || ""}
          register1={register("SenderCity", {
            required: "Please Fill City graph",
          })}
          register2={register("SenderZipCode", {
            required: " Please Fill Zip Code",
            minLength: {
              value: 5,
              message: "Length must be 5",
            },
          })}
          defaultValue2={find?.senderAddress.postCode || ""}
          id2="SenderZipCode"
        />
        <div className="flex justify-between w-full ">
          {errors.SenderCity ? (
            <p className="text-[red] text-[10px] font-league-spartan leading-4 tracking-tight w-full text-left py-2">
              {errors.SenderCity.message}
            </p>
          ) : null}
          {errors.SenderZipCode ? (
            <p className="text-[red] font-league-spartan text-[10px] leading-4 tracking-tight w-full text-left  py-2">
              {errors.SenderZipCode.message}
            </p>
          ) : null}
        </div>
        <InputComponent
          inputTitle="Country"
          id="SenderCountry"
          defaultValue={find?.senderAddress?.country || ""}
          register={register("SenderCountry", { required: true })}
        />
        {errors.SenderCountry ? (
          <p className="text-[red] font-league-spartan text-[10px] leading-4 tracking-tight w-full text-left  py-2">
            Please fill Country graph
          </p>
        ) : null}
        <h3 className="text-section-title-color font-league-spartan text-[15px] font-bold leading-4 tracking-tight w-full text-left py-2 ">
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
        <h3 className="text-section-title-color font-league-spartan text-[15px] font-bold leading-4 tracking-tight w-full text-left py-2 ">
          Bill To
        </h3>
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
          defaultValue={find?.clientAddress.street || ""}
          register={register("ClientStreetAddress", { required: true })}
        />
        {errors.ClientStreetAddress ? (
          <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
            Street address is required
          </p>
        ) : null}
        <InputsComponent
          inputTitle1="city"
          inputTitle2="Post Code"
          id1="clientAddressCity"
          defaultValue1={find?.clientAddress.city || ""}
          register1={register("clientAddressCity", {
            required: "Please Fill City graph",
          })}
          register2={register("clientZipCode", {
            required: " Please Fill Zip Code",
            minLength: {
              value: 5,
              message: "Length must be 5",
            },
          })}
          defaultValue2={find?.clientAddress.postCode || ""}
          id2="clientZipCode"
        />
        <div className="flex justify-between w-full ">
          {errors.clientAddressCity ? (
            <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
              {errors.clientAddressCity.message}
            </p>
          ) : null}
          {errors.clientZipCode ? (
            <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
              {errors.clientZipCode.message}
            </p>
          ) : null}
        </div>
        <InputComponent
          inputTitle="Country"
          id="ClientCountry"
          defaultValue={find?.clientAddress.country || ""}
          register={register("ClientCountryAddress", { required: true })}
        />
        {errors.ClientCountryAddress ? (
          <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
            Please fill Country graph
          </p>
        ) : null}
        <InputComponent
          inputTitle="Invoice Date"
          id="InvoiceDate"
          type="date"
          color="0.5"
          defaultValue={formattedDate || ""}
          register={register("InvoiceDate", { required: true })}
        />

        <InputComponent
          inputTitle="Payment Terms"
          id="PaymentTerms"
          defaultValue={`Net ${find?.paymentTerms} Days` || ""}
          register={register("paymentTerms", { required: true })}
        />
        {errors.paymentTerms ? (
          <p className="text-[red] font-league-spartan text-[10px]  leading-4 tracking-tight w-full text-left  py-2">
            Payment Terms is required
          </p>
        ) : null}
        <InputComponent
          inputTitle="Project Description"
          id="ProjectDescription"
          defaultValue={find?.description || ""}
          register={register("ProjectDescription")}
        />

        <h3 className="text-[#777F98] pt-[50px] pb-[20px] font-league-spartan text-[18px] tracking-wide font-bold leading-32px  w-full text-left py-2 ">
          item List
        </h3>
        <InputComponent
          inputTitle="Item Name"
          id="itemName"
          defaultValue={find?.items[0].name || ""}
          register={register("itemName")}
        />

        <ItemContainer
          inputTitle1="Qty."
          inputTitle2="price"
          id1="Qty1"
          handleBinClick={handleBinClick}
          defaultValue1={find?.items[0].quantity || 0}
          register1={register("quantity", { required: true })}
          register2={register("price", { required: true })}
          defaultValue2={find?.items[0].price || 0}
          id2="price2"
        />

        <InputComponent
          inputTitle="Item Name"
          id="itemName2"
          defaultValue={find?.items[1].name || ""}
          register={register("itemName2", { required: true })}
        />

        <ItemContainer
          inputTitle1="Qty."
          inputTitle2="price"
          id1="Qty1"
          handleBinClick={handleSecondItemBinClick}
          defaultValue1={find?.items[1].quantity || 0}
          register1={register("quantity2", { required: true })}
          register2={register("price2", { required: true })}
          defaultValue2={find?.items[1].price || 0}
          id2="price2"
        />
        <AddNewItemButton />

        <div className="w-full h-[40px] bg-gradient-to-bottom "></div>
        <AddInvoicesButtons />
        <EditInvoicesButtons />
      </form>
    </div>
  );
}
