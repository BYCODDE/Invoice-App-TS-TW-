import  { useContext } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { CategoryContext } from '../../App'
type Inputs = {
    StreetAddress: string
    City: string
    zipCode:string
    senderAddress:string
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
   
  return (


        <form className='flex flex-col items-center justify-center box-border p-3' onSubmit={handleSubmit(onSubmit)}>



        <div className="flex flex-col items-start justify-center gap-3 w-327 box-border"> 
   <label className="text-custom-gray font-league-spartan text-xs font-medium leading-4 tracking-tight pl-3" htmlFor="StreetAddress">StreetAddress</label>
          <input 	
 className= "w-80 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" defaultValue={find?.
    clientAddress?.street} {...register("StreetAddress")} />
    
    </div>  



    <div className='flex gap-1 p-3 box-border' >
        <div className="flex flex-col items-start justify-center gap-3 w-152 ">
    <label className="text-custom-color font-league-spartan text-xs font-medium leading-4 tracking-tight px-3" htmlFor="StreetAddress">StreetAddress</label>
          <input className=" w-38 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3" defaultValue={find?.clientAddress.city} {...register("City", { required: true })} />
     </div>
        


     <div className="flex flex-col items-start justify-center gap-3 w-152 box-border">
     <label className="text-custom-color font-league-spartan text-xs font-medium leading-4 tracking-tight px-3" htmlFor="StreetAddress">Zip Code</label>
          <input className=" w-38 h-12 flex-shrink-0 rounded-md border border-gray-300 bg-white text-custom-color font-league-spartan text-sm font-bold leading-4 tracking-tight pl-3"  defaultValue={find?.clientAddress.postCode}{...register("zipCode", { required: true })} />
      </div>    
 </div> 
 <input
  type="submit"
  className="w-36 h-12 flex-shrink-0 bg-blue-600 text-white font-league-spartan text-sm font-bold leading-4 tracking-tight rounded-3xl"
  value="Save Changes"
/>

        </form>
      )
    }
  

