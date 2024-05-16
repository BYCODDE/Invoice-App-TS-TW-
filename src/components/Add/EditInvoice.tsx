import  { useContext } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { CategoryContext } from '../../App'
import { format } from 'date-fns';
import InputComponent from './InputComponent';
import InputsComponent from './InputsComponent';
type Inputs = {
    SenderStreetAddress: string
    SenderCity: string
    SenderZipCode:string
    senderAddress:string
    SenderCountry:string
    clientName:string
    clientEmail:string
    ClientStreetAddress:string
    clientAddressCity:string
    clientZipCode:string
    ClientCountryAddress:string
    InvoiceDate:string
  }
export default function EditInvoice() {
const {invoices}=useContext(CategoryContext)
const find = invoices.find(item => item.id === "XM9141");

console.log(find)
    const {
        register,
        handleSubmit,
     
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
      const formattedDate = format(new Date(`${find?.createdAt}`), 'dd MMM yyyy');
     
  return (
    <div className='p-3'>

        <form className='flex flex-col items-center justify-center box-border p-3' onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-section-title-color font-league-spartan text-sm font-bold leading-4 tracking-tight w-full text-left  py-2">Bill From</h3>

<InputComponent 
 inputTitle="Street Address"
id="SenderStreetAddress"
        defaultValue={find?.senderAddress?.street || ""} 
        register={register("SenderStreetAddress")}  />

<InputsComponent  inputTitle1="city"  inputTitle2="Post Code" id1="SenderCity" defaultValue1={find?.senderAddress.postCode||""} register1={register("SenderCity", { required: true })}  register2={register("SenderZipCode", { required: true })}  defaultValue2={find?.senderAddress.postCode||""} id2="SenderZipCode"/>

    <InputComponent 
    inputTitle="Country"
    id="SenderCountry"
        defaultValue={find?.senderAddress?.country || ""} 
        register={register("SenderCountry")}  />



    <h3 className="text-section-title-color font-league-spartan text-sm font-bold leading-4 tracking-tight w-full text-left py-2 ">Bill To</h3>


    <InputComponent 
 inputTitle="Client’s Name"
id="ClientName"
        defaultValue={find?.clientName || ""} 
        register={register("clientName")}  />

    <InputComponent 
 inputTitle="Client’s Email"
id="ClientEmail"
        defaultValue={find?.clientEmail || ""} 
        register={register("clientEmail")}  />

    <InputComponent 
 inputTitle="Street Address"
id="ClientStreetAddress"
        defaultValue={find?.clientAddress.street || ""} 
        register={register("ClientStreetAddress")}  />

 <InputsComponent  inputTitle1="city"  inputTitle2="Post Code" id1="clientAddressCity" defaultValue1={find?.clientAddress.city||""} register1={register("clientAddressCity", { required: true })}  register2={register("clientZipCode", { required: true })}  defaultValue2={find?.clientAddress.postCode||""} id2="clientZipCode"/>

    <InputComponent 
 inputTitle="Country"
id="ClientCountry"
        defaultValue={find?.clientAddress.country || ""} 
        register={register("ClientCountryAddress")}  />




    <InputComponent 
 inputTitle="Street Address"
id="InvoiceDate"
        defaultValue={formattedDate || ""} 
        register={register("InvoiceDate")}  />


    <input
  type="submit"
  className="w-36 h-12 flex-shrink-0 bg-blue-600 text-white font-league-spartan text-sm font-bold leading-4 tracking-tight rounded-3xl"
  value="Save Changes"
/>
        </form>
        </div>
      )
    }
  

