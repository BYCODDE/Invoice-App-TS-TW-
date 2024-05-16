import  { useContext } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { CategoryContext } from '../../App'
import { format } from 'date-fns';
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


        <div className="flex flex-col items-start justify-center gap-3 w-327 box-border"> 
   <label className="text-custom-gray font-league-spartan text-xs font-medium leading-4 tracking-tight pl-3" htmlFor="SenderStreetAddress">StreetAddress</label>
          <input 	
 className= "w-80 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='SenderStreetAddress' defaultValue={find?.
    senderAddress?.street} {...register("SenderStreetAddress")} />
    
    </div>  



    <div className='flex gap-1 p-3 box-border' >
        <div className="flex flex-col items-start justify-center gap-3 w-152 ">
    <label className="text-custom-color font-league-spartan text-xs font-medium leading-4 tracking-tight px-3" htmlFor="SenderCity">City</label>
          <input className=" w-38 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='SenderCity' defaultValue={find?.senderAddress.city} {...register("SenderCity", { required: true })} />
     </div>
        


     <div className="flex flex-col items-start justify-center gap-3 w-152 box-border">
     <label className="text-custom-color font-league-spartan text-xs font-medium leading-4 tracking-tight px-3" htmlFor="SenderZipCode">Zip Code</label>
          <input className=" w-38 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='SenderZipCode' defaultValue={find?.senderAddress.postCode}{...register("SenderZipCode", { required: true })} />
      </div>    
 </div> 

<div className="flex flex-col items-start justify-center gap-3 w-327 box-border"> 
   <label className="text-custom-gray font-league-spartan text-xs font-medium leading-4 tracking-tight pl-3" htmlFor="SenderCountry">Country</label>
          <input 	
 className= "w-80 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='SenderCountry' defaultValue={find?.
    senderAddress?.country} {...register("SenderCountry")} />
    </div>  
    <h3 className="text-section-title-color font-league-spartan text-sm font-bold leading-4 tracking-tight w-full text-left py-2 ">Bill To</h3>

    <div className="flex flex-col items-start justify-center gap-3 w-327 box-border py-3"> 
   <label className="text-custom-gray font-league-spartan text-xs font-medium leading-4 tracking-tight pl-3" htmlFor="ClientName">Client’s Name</label>
          <input 	
 className= "w-80 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='ClientName' defaultValue={find?.clientName} {...register("clientName")} />
    </div> 

    <div className="flex flex-col items-start justify-center gap-3 w-327 box-border py-3"> 
   <label className="text-custom-gray font-league-spartan text-xs font-medium leading-4 tracking-tight pl-3" htmlFor="ClientEmail">Client’s Email</label>
          <input 	
 className= "w-80 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='ClientEmail' defaultValue={find?.clientEmail} {...register("clientEmail")} />
    </div> 

    <div className="flex flex-col items-start justify-center gap-3 w-327 box-border py-3"> 
   <label className="text-custom-gray font-league-spartan text-xs font-medium leading-4 tracking-tight pl-3" htmlFor="ClientStreetAddress">Street Address</label>
          <input 	
 className= "w-80 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='ClientStreetAddress' defaultValue={find?.clientAddress.street} {...register("ClientStreetAddress")} />
    </div> 



    <div className='flex gap-1 p-3 box-border' >
        <div className="flex flex-col items-start justify-center gap-3 w-152 ">
    <label className="text-custom-color font-league-spartan text-xs font-medium leading-4 tracking-tight px-3" htmlFor="clientAddressCity">City</label>
          <input className=" w-38 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='clientAddressCity' defaultValue={find?.clientAddress.city} {...register("clientAddressCity", { required: true })} />
     </div>
        


     <div className="flex flex-col items-start justify-center gap-3 w-152 box-border">
     <label className="text-custom-color font-league-spartan text-xs font-medium leading-4 tracking-tight px-3" htmlFor="clientZipCode">Post Code</label>
          <input className=" w-38 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='clientZipCode' defaultValue={find?.clientAddress.postCode}{...register("clientZipCode", { required: true })} />
      </div>    
 </div> 

 <div className="flex flex-col items-start justify-center gap-3 w-327 box-border py-3"> 
   <label className="text-custom-gray font-league-spartan text-xs font-medium leading-4 tracking-tight pl-3" htmlFor="ClientCountry">Country</label>
          <input 	
 className= "w-80 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='ClientCountry' defaultValue={find?.clientAddress.country} {...register("ClientCountryAddress")} />
    </div> 

    <div className="flex flex-col items-start justify-center gap-3 w-327 box-border py-3"> 
   <label className="text-custom-gray font-league-spartan text-xs font-medium leading-4 tracking-tight pl-3" htmlFor="InvoiceDate">Street Address</label>
          <input 	
 className= "w-80 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" id='InvoiceDate' defaultValue={formattedDate} {...register("InvoiceDate")} />
    </div> 


    <input
  type="submit"
  className="w-36 h-12 flex-shrink-0 bg-blue-600 text-white font-league-spartan text-sm font-bold leading-4 tracking-tight rounded-3xl"
  value="Save Changes"
/>
        </form>
        </div>
      )
    }
  

