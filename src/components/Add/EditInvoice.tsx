import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InvoiceContext } from "../../App";
import { format } from "date-fns";
import InputComponent from "./InputComponent";
import InputsComponent from "./InputsComponent";
import ItemContainer from "./ItemContainer";
import AddNewItemButton from "./AddNewItemButton";

type Inputs = {
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
  const { invoices } = useContext(InvoiceContext);
  const find = invoices.find((item) => item.id === "XM9141");

  console.log(find);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const formattedDate = format(new Date(`${find?.createdAt}`), "dd MMM yyyy");
  console.log(formattedDate);
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
          register={register("SenderStreetAddress")}
        />

        <InputsComponent
          inputTitle1="city"
          inputTitle2="Post Code"
          id1="SenderCity"
          defaultValue1={find?.senderAddress.postCode || ""}
          register1={register("SenderCity", { required: true })}
          register2={register("SenderZipCode", { required: true })}
          defaultValue2={find?.senderAddress.postCode || ""}
          id2="SenderZipCode"
        />

        <InputComponent
          inputTitle="Country"
          id="SenderCountry"
          defaultValue={find?.senderAddress?.country || ""}
          register={register("SenderCountry", { required })}
        />

        <h3 className="text-section-title-color font-league-spartan text-[15px] font-bold leading-4 tracking-tight w-full text-left py-2 ">
          Bill To
        </h3>

        <InputComponent
          inputTitle="Client’s Name"
          id="ClientName"
          defaultValue={find?.clientName || ""}
          register={register("clientName")}
        />

        <InputComponent
          inputTitle="Client’s Email"
          id="ClientEmail"
          defaultValue={find?.clientEmail || ""}
          register={register("clientEmail")}
        />

        <InputComponent
          inputTitle="Street Address"
          id="ClientStreetAddress"
          defaultValue={find?.clientAddress.street || ""}
          register={register("ClientStreetAddress")}
        />

        <InputsComponent
          inputTitle1="city"
          inputTitle2="Post Code"
          id1="clientAddressCity"
          defaultValue1={find?.clientAddress.city || ""}
          register1={register("clientAddressCity", { required: true })}
          register2={register("clientZipCode", { required: true })}
          defaultValue2={find?.clientAddress.postCode || ""}
          id2="clientZipCode"
        />

        <InputComponent
          inputTitle="Country"
          id="ClientCountry"
          defaultValue={find?.clientAddress.country || ""}
          register={register("ClientCountryAddress")}
        />

        <InputComponent
          inputTitle="Invoice Date"
          id="InvoiceDate"
          type="date"
          color="0.5"
          defaultValue={formattedDate || ""}
          register={register("InvoiceDate")}
        />

        <InputComponent
          inputTitle="Payment Terms"
          id="PaymentTerms"
          defaultValue={`Net ${find?.paymentTerms} Days` || ""}
          register={register("paymentTerms")}
        />

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
          register={register("itemName2")}
        />

        <ItemContainer
          inputTitle1="Qty."
          inputTitle2="price"
          id1="Qty1"
          defaultValue1={find?.items[1].quantity || 0}
          register1={register("quantity2", { required: true })}
          register2={register("price2", { required: true })}
          defaultValue2={find?.items[1].price || 0}
          id2="price2"
        />
        <AddNewItemButton />

        <div className="flex py-[20px] gap-[10px]  w-full justify-end  ">
          <button className="w-[96px] h-[48px] dark:bg-[#1E2139]  dark:text-white cursor-pointer flex-shrink-0 rounded-full bg-gray-100 text-gray-700 text-center font-league-spartan text-[15px] font-bold leading-15 tracking-tighter">
            Cancel
          </button>
          <input
            type="submit"
            className="w-[138px] h-[48px] cursor-pointer flex-shrink-0 rounded-full bg-purple-600 text-white font-league-spartan text-[15px] font-bold leading-15 tracking-tighter"
            value="Save Changes"
          />
        </div>
      </form>
    </div>
  );
}
